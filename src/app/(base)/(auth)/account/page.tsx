import { Spacer } from '@/component/spacer/spacer'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Metadata } from 'next'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const spabase = createServerComponentClient({ cookies })
  const user = await spabase.auth.getUser()
  return {
    title: user.data.user?.email ?? 'account',
  }
}

const Page = async () => {
  const spabase = createServerComponentClient({ cookies })
  const user = await spabase.auth.getUser()

  return (
    <div className={'h-full flex justify-center items-center'}>
      <h1 className={'text-4xl flex flex-col items-center'}>
        <span>welcome to</span>
        <Spacer size={2} />
        <span className={'font-bold'}>{user.data.user?.email}</span>
      </h1>
    </div>
  )
}

export default Page
