'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export const SigOutButton = () => {
  const router = useRouter()
  const spabase = createClientComponentClient()
  const handleSignOut = async () => {
    try {
      await spabase.auth.signOut()
      router.refresh()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <button onClick={handleSignOut} type={'button'}>
      サインアウト
    </button>
  )
}
