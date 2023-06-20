import { ReactElement } from 'react'

type Props = {
  children: Iterable<ReactElement> | ReactElement
}

export const Wrapper = ({ children }: Props) => {
  return <div className={'mx-auto max-w-3xl px-5'}>{children}</div>
}
