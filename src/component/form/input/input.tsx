import { ComponentProps, forwardRef } from 'react'

type Props = Pick<
  ComponentProps<'input'>,
  | 'disabled'
  | 'max'
  | 'maxLength'
  | 'min'
  | 'minLength'
  | 'name'
  | 'onBlur'
  | 'onChange'
  | 'pattern'
  | 'required'
  | 'type'
>

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      className={'input input-bordered input-primary w-full'}
      ref={ref}
      {...props}
    />
  )
})
