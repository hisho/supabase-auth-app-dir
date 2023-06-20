'use client'

import { Wrapper } from '@/app/(base)/_component/wrapper'
import { Spacer } from '@/component/spacer/spacer'
import { useSignOut } from '@/feature/auth/sign-out/use-sign-out'
import Link from 'next/link'

export const Header = () => {
  const { handleSignOut } = useSignOut()

  return (
    <header className={'bg-base-200 text-base-content py-2'}>
      <Wrapper>
        <div className={'flex'}>
          <Link href={'/'}>
            <div className={'text-3xl'}>📦</div>
          </Link>
          <Spacer isHorizontal />
          <button onClick={handleSignOut} type={'button'}>
            サインアウト
          </button>
        </div>
      </Wrapper>
    </header>
  )
}
