'use client'

import { Wrapper } from '@/app/(base)/_component/wrapper'
import { Spacer } from '@/component/spacer/spacer'
import { useAuthContext } from '@/feature/auth/auth-provider/auth-provider'
import { useSignOut } from '@/feature/auth/sign-out/use-sign-out'
import * as Avatar from '@radix-ui/react-avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'

export const Header = () => {
  const { handleSignOut } = useSignOut()
  const { user } = useAuthContext()

  return (
    <header className={'bg-base-200 text-base-content py-2'}>
      <Wrapper>
        <div className={'flex items-center'}>
          <Link href={'/'}>
            <div className={'text-3xl'}>📦</div>
          </Link>
          <Spacer isHorizontal />
          {user ? (
            <>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <button
                    className={
                      'rounded-full h-10 w-10 flex items-center justify-center bg-accent text-primary'
                    }
                  >
                    <Avatar.Root
                      className={
                        'w-full h-full flex select-none items-center justify-center overflow-hidden rounded-full'
                      }
                    >
                      <Avatar.Fallback
                        className={
                          'leading-1 flex h-full w-full items-center justify-center text-xl font-medium'
                        }
                      >
                        {user.email?.at(0)?.toUpperCase()}
                      </Avatar.Fallback>
                    </Avatar.Root>
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className="min-w-[160px] bg-base-200 text-base-content p-1"
                    sideOffset={2}
                  >
                    <div className={'px-2 py-1.5 text-sm font-semibold'}>
                      My Account
                    </div>
                    <DropdownMenu.Separator
                      className={'-mx-1 my-1 h-px bg-gray-700'}
                    />
                    <DropdownMenu.Item
                      className={
                        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground'
                      }
                    >
                      <svg
                        className="mr-2 h-4 w-4"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <Link href={'/account'}>Profile</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      className={
                        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground'
                      }
                    >
                      <button
                        className={'flex w-full h-full text-left'}
                        onClick={handleSignOut}
                        type={'button'}
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" x2="9" y1="12" y2="12"></line>
                        </svg>
                        サインアウト
                      </button>
                    </DropdownMenu.Item>

                    <DropdownMenu.Arrow className="fill-white" />
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </>
          ) : (
            <Link href={'/sign-in'}>サインイン</Link>
          )}
        </div>
      </Wrapper>
    </header>
  )
}
