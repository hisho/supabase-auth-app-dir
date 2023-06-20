'use client'

import { Button } from '@/component/button/button'
import { ErrorMessage } from '@/component/form/error-message/error-message'
import { Input } from '@/component/form/input/input'
import { Spacer } from '@/component/spacer/spacer'
import { NEXT_PUBLIC_FRONTEND_URL } from '@/constant/constant'
import { useForm } from '@/lib/form/use-form'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const SignUpForm = () => {
  const router = useRouter()
  const spabase = createClientComponentClient()
  const { formState, handleSubmit, register } = useForm({
    schema: signUpSchema,
  })

  const handleSignUp = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      await spabase.auth.signUp({
        email,
        options: {
          emailRedirectTo: `${NEXT_PUBLIC_FRONTEND_URL}/auth/callback/`,
        },
        password,
      })
      router.refresh()
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className={'flex flex-col gap-4'}>
        <label className={'block'}>
          <p>email</p>
          <Spacer size={1} />
          <Input {...register('email')} />
          {formState.errors.email?.message && (
            <ErrorMessage message={formState.errors.email.message} />
          )}
        </label>
        <label className={'block'}>
          <p>password</p>
          <Spacer size={1} />
          <Input {...register('password')} />
          {formState.errors.password?.message && (
            <ErrorMessage message={formState.errors.password.message} />
          )}
        </label>
      </div>
      <Spacer size={6} />
      <div className={'flex justify-center'}>
        <Button>サインアップ</Button>
      </div>
    </form>
  )
}
