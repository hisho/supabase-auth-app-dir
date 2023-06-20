import { Footer } from '@/app/(root)/_component/footer'
import { Header } from '@/app/(root)/_component/header'
import { Wrapper } from '@/app/(root)/_component/wrapper'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <div className={'h-[100svh] grid grid-rows-[auto,1fr,auto]'}>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  )
}

export default Layout
