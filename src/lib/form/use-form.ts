import { zodResolver } from '@hookform/resolvers/zod'
import { UseFormProps, useForm as useRHFrom } from 'react-hook-form'
import { z } from 'zod'

type Props<TSchema extends z.ZodType> = Omit<
  UseFormProps<TSchema['_input']>,
  'resolver'
> & {
  schema: TSchema
}

export const useForm = <TSchema extends z.ZodType>({
  schema,
  ...props
}: Props<TSchema>) => {
  return useRHFrom<TSchema['_input']>({
    ...props,
    resolver: zodResolver(schema, undefined),
  })
}
