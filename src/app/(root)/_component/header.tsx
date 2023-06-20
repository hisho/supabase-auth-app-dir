'use client'

import { useSignOut } from '@/feature/auth/sign-out/use-sign-out'

export const Header = () => {
  const { handleSignOut } = useSignOut()

  return (
    <header>
      header
      <button onClick={handleSignOut} type={'button'}>
        サインアウト
      </button>
    </header>
  )
}
