'use client'

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
  const { handleSubmit, register } = useForm({
    schema: signInSchema,
  })

  const handleSignIn = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      await spabase.auth.signInWithPassword({
        email,
        password,
      })
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>サインイン</h1>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input {...register('email')} />
        <input {...register('password')} />
        <button>サインイン</button>
      </form>
    </div>
  )
}
