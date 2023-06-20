import { useSetAuthContext } from '@/feature/auth/auth-provider/auth-provider'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export const useSignOut = () => {
  const router = useRouter()
  const spabase = createClientComponentClient()
  const setAuthContext = useSetAuthContext()
  const handleSignOut = async () => {
    try {
      await spabase.auth.signOut()
      setAuthContext({ user: null })
      router.push('/sign-in')
    } catch (e) {
      console.log(e)
    }
  }

  return {
    handleSignOut,
  } as const
}
