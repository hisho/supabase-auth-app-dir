'use client'

import { Button } from '@/component/button/button'
import { ErrorMessage } from '@/component/form/error-message/error-message'
import { Input } from '@/component/form/input/input'
import { Spacer } from '@/component/spacer/spacer'
import { NEXT_PUBLIC_FRONTEND_URL } from '@/constant/constant'
import { useSetAuthContext } from '@/feature/auth/auth-provider/auth-provider'
import { useForm } from '@/lib/form/use-form'
import { timer } from '@/util/timer/timer'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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
  const setAuthContext = useSetAuthContext()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSignUp = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    setIsLoading(true)
    try {
      const [result] = await Promise.allSettled([
        spabase.auth.signUp({
          email,
          options: {
            emailRedirectTo: `${NEXT_PUBLIC_FRONTEND_URL}/auth/callback/`,
          },
          password,
        }),
        timer(2000),
      ])
      if (result.status === 'fulfilled') {
        setAuthContext({ user: result.value.data.user })
        router.push('/account')
      }
    } catch (error) {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className={'flex flex-col gap-4'}>
        <label className={'block'}>
          <p>email</p>
          <Spacer size={1} />
          <Input {...register('email')} disabled={isLoading} />
          {formState.errors.email?.message && (
            <ErrorMessage message={formState.errors.email.message} />
          )}
        </label>
        <label className={'block'}>
          <p>password</p>
          <Spacer size={1} />
          <Input {...register('password')} disabled={isLoading} />
          {formState.errors.password?.message && (
            <ErrorMessage message={formState.errors.password.message} />
          )}
        </label>
      </div>
      <Spacer size={6} />
      <div className={'flex justify-center'}>
        <Button className={'max-w-[160px]'} isLoading={isLoading}>
          サインアップ
        </Button>
      </div>
    </form>
  )
}
