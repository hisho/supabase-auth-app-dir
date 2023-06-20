'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export const SigInInForm = () => {
  const router = useRouter()
  const spabase = createClientComponentClient()
  const { handleSubmit, register } = useForm<{
    email: string
    password: string
  }>()

  const handleSignUp = async ({
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
      <form onSubmit={handleSubmit(handleSignUp)}>
        <input {...register('email')} />
        <input {...register('password')} />
        <button>サインイン</button>
      </form>
    </div>
  )
}
