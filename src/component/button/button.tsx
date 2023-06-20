import { cn } from '@/lib/utils/cn'
import { ComponentProps } from 'react'

type Props = Omit<ComponentProps<'button'>, 'disabled'> & {
  isLoading?: boolean
}

export const Button = ({
  children,
  className,
  isLoading = false,
  ...props
}: Props) => {
  return (
    <button
      className={cn('btn btn-outline btn-primary w-full', className)}
      {...props}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className={'loading loading-spinner loading-xs'} />
      ) : (
        children
      )}
    </button>
  )
}
