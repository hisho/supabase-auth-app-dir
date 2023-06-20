import { SignInForm } from '@/feature/auth/sign-In/sign-In-form'

const Page = () => {
  return (
    <div>
      <h1 className={'text-center text-4xl font-bold'}>サインイン</h1>
      <div className={'max-w-xl mx-auto'}>
        <SignInForm />
      </div>
    </div>
  )
}

export default Page
