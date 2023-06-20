import { Footer } from '@/app/(root)/_component/footer'
import { Header } from '@/app/(root)/_component/header'
import { Wrapper } from '@/app/(root)/_component/wrapper'
import { AuthProvider } from '@/feature/auth/auth-provider/auth-provider'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <div className={'h-[100svh] grid grid-rows-[auto,1fr,auto]'}>
        <Header />
        <Wrapper className={'pt-10 pb-14 relative'}>{children}</Wrapper>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default Layout
