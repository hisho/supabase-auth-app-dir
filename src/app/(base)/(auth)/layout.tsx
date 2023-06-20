import { AuthGuard } from '@/feature/auth/auth-guard/auth-guard'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return <AuthGuard>{children}</AuthGuard>
}

export default Layout
