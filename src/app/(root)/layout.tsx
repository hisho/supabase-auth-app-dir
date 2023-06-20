import { Header } from '@/app/(root)/_component/header'
import { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
