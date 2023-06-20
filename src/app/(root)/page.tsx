import { Wrapper } from '@/app/(root)/_component/wrapper'
import { SignInForm } from '@/feature/auth/sign-In/sign-In-form'
import { SignUpForm } from '@/feature/auth/sign-up/sign-up-form'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const Page = async () => {
  const spabase = createServerComponentClient({ cookies })
  const user = await spabase.auth.getUser()

  return (
    <Wrapper>
      <SignUpForm />
      <SignInForm />
      <div>{JSON.stringify(user.data.user)}</div>
    </Wrapper>
  )
}

export default Page
