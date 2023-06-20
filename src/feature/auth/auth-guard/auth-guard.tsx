'use client'

import { useAuthContext } from '@/feature/auth/auth-provider/auth-provider'
import { useRouter } from 'next/navigation'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export const AuthGuard = ({ children }: Props) => {
  const { user } = useAuthContext()
  const router = useRouter()

  if (typeof user === 'undefined') {
    return (
      <div className={'absolute inset-0 flex justify-center items-center'}>
        <span className={'loading loading-ring loading-md'} />
      </div>
    )
  }

  if (user === null) {
    router.push('/sign-in')
    return null
  }

  return <>{children}</>
}
