import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const Page = async () => {
  const spabase = createServerComponentClient({ cookies })
  const user = await spabase.auth.getUser()

  return <div>{JSON.stringify(user.data.user)}</div>
}

export default Page
