import { ComponentProps } from 'react'

type Props = Omit<ComponentProps<'button'>, 'className'>

export const Button = ({ children, ...props }: Props) => {
  return (
    <button className={'btn btn-outline btn-primary'} {...props}>
      {children}
    </button>
  )
}
