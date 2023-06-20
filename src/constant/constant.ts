import { env } from '@/constant/env'
import { match } from 'ts-pattern'

export const NEXT_PUBLIC_FRONTEND_URL = match(env.NEXT_PUBLIC_NODE_ENV)
  .with('development', () => `http://localhost:3000` as const)
  .with('production', () => `https://${env.NEXT_PUBLIC_VERCEL_URL}` as const)
  .exhaustive()
