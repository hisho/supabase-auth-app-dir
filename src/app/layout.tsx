import '@/app/globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
export const metadata: Metadata = {
  description: 'Supabase Auth with Next.js App Directory',
  title: {
    default: 'Supabase Auth',
    template: '%s | Supabase Auth',
  },
}

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
export default Layout
