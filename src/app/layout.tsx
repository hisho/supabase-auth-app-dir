import { ReactNode } from 'react'

export const metadata = {
  description: 'Supabase Auth with Next.js App Directory',
  title: 'Supabase Auth with Next.js App Directory',
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
