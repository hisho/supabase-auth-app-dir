import { SignUpForm } from '@/feature/auth/sign-up/sign-up-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'サインアップ',
}
const Page = () => {
  return (
    <div>
      <h1 className={'text-center text-4xl font-bold'}>サインアップ</h1>
      <div className={'max-w-xl mx-auto'}>
        <SignUpForm />
      </div>
    </div>
  )
}

export default Page
