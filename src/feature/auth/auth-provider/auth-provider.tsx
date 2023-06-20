'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { User } from '@supabase/auth-helpers-nextjs'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

export type GlobalAuthState = {
  user: User | null | undefined
}
const initialState: GlobalAuthState = {
  user: undefined,
}
const authContext = createContext<GlobalAuthState>(initialState)
const setAuthContext = createContext<Dispatch<SetStateAction<GlobalAuthState>>>(
  () => {}
)

type Props = { children: ReactNode }

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<GlobalAuthState>(initialState)
  const { auth } = createClientComponentClient()

  useEffect(() => {
    Promise.allSettled([
      auth.getUser(),
      new Promise((r) => setTimeout(r, 3000)),
    ]).then(([user]) => {
      if (user.status === 'fulfilled') {
        setUser(user.value.data)
      }
    })
    const { data } = auth.onAuthStateChange((_, session) => {
      console.log(session)
      setUser({
        user: session?.user ?? null,
      })
    })
    return data.subscription.unsubscribe()
  }, [])

  return (
    <authContext.Provider value={user}>
      <setAuthContext.Provider value={setUser}>
        {children}
      </setAuthContext.Provider>
    </authContext.Provider>
  )
}

export const useAuthContext = () => useContext(authContext)
export const useSetAuthContext = () => useContext(setAuthContext)
