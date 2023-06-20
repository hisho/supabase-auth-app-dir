'use client'

import { ErrorMessage } from '@/component/form/error-message/error-message'
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
    <div>
      <h1>サインアップ</h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <label>
          <input {...register('email')} />
          {formState.errors.email?.message && (
            <ErrorMessage message={formState.errors.email.message} />
          )}
        </label>
        <label>
          <input {...register('password')} />
          {formState.errors.password?.message && (
            <ErrorMessage message={formState.errors.password.message} />
          )}
        </label>
        <button>作成</button>
      </form>
    </div>
  )
}
