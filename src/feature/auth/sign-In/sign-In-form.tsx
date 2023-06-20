'use client'

import { Button } from '@/component/button/button'
import { ErrorMessage } from '@/component/form/error-message/error-message'
import { Input } from '@/component/form/input/input'
import { Spacer } from '@/component/spacer/spacer'
import { useSetAuthContext } from '@/feature/auth/auth-provider/auth-provider'
import { useForm } from '@/lib/form/use-form'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const SignInForm = () => {
  const router = useRouter()
  const spabase = createClientComponentClient()
  const { formState, handleSubmit, register } = useForm({
    schema: signInSchema,
  })
  const setAuthContext = useSetAuthContext()

  const handleSignIn = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      const { data } = await spabase.auth.signInWithPassword({
        email,
        password,
      })
      setAuthContext({ user: data.user })
      router.push('/account')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <div className={'flex flex-col gap-4'}>
        <label className={'block'}>
          <p>email</p>
          <Spacer size={1} />
          <Input {...register('email')} />
          <Spacer size={1} />
          {formState.errors.email?.message && (
            <ErrorMessage message={formState.errors.email.message} />
          )}
        </label>
        <label className={'block'}>
          <p>password</p>
          <Spacer size={1} />
          <Input {...register('password')} />
          <Spacer size={1} />
          {formState.errors.password?.message && (
            <ErrorMessage message={formState.errors.password.message} />
          )}
        </label>
      </div>
      <Spacer size={6} />
      <div className={'flex justify-center'}>
        <Button>サインイン</Button>
      </div>
    </form>
  )
}
