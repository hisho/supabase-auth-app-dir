'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { User } from '@supabase/auth-helpers-nextjs'
import {
  ReactNode,
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
const AuthContext = createContext<GlobalAuthState>(initialState)

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

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
