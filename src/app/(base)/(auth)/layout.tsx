import { AuthGuard } from '@/feature/auth/auth-guard/auth-guard'
import { Metadata } from 'next'
import { ReactElement } from 'react'

export const metadata: Metadata = {
  robots: {
    follow: false,
    index: false,
  },
}

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return <AuthGuard>{children}</AuthGuard>
}

export default Layout
