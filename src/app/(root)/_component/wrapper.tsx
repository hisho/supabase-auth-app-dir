import { cn } from '@/lib/utils/cn'
import { ComponentProps, ReactElement } from 'react'

type Props = {
  children: Iterable<ReactElement> | ReactElement
} & Pick<ComponentProps<'div'>, 'className'>

export const Wrapper = ({ children, className }: Props) => {
  return (
    <div className={cn('mx-auto w-full max-w-3xl px-5', className)}>
      {children}
    </div>
  )
}
