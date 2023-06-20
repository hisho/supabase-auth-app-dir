import { SignInForm } from '@/feature/auth/sign-In/sign-In-form'
import { useSignOut } from '@/feature/auth/sign-out/use-sign-out'
import { SignUpForm } from '@/feature/auth/sign-up/sign-up-form'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const Page = async () => {
  const spabase = createServerComponentClient({ cookies })
  const user = await spabase.auth.getUser()
  const { handleSignOut } = useSignOut()

  return (
    <div>
      <SignUpForm />
      <SignInForm />
      <button onClick={handleSignOut} type={'button'}>
        サインアウト
      </button>
      {JSON.stringify(user.data.user)}
    </div>
  )
}

export default Page
