import { CreateUserForm } from '@/app/(root)/_component/create-user-form'
import { SigInInForm } from '@/app/(root)/_component/sigin-in-form'
import { SigOutButton } from '@/app/(root)/_component/sign-out-button'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const Page = async () => {
  const spabase = createServerComponentClient({ cookies })
  const user = await spabase.auth.getUser()

  return (
    <div>
      <CreateUserForm />
      <SigInInForm />
      <SigOutButton />
      {JSON.stringify(user.data.user)}
    </div>
  )
}

export default Page
