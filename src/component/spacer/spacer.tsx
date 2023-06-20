import { memo } from 'react'

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const
type List = (typeof list)[number]

type Props = {
  isHorizontal?: boolean
  size?: List
}

const resolveValue = (value: List | undefined) => {
  if (value === undefined) {
    return undefined
  } else if (list.includes(value)) {
    return value * 4
  }
  return undefined
}
export const Spacer = memo(({ isHorizontal = false, size }: Props) => {
  return (
    <span
      className={`block select-none pointer-events-none ${
        isHorizontal ? 'flex-1' : ''
      }`}
      style={{
        height: isHorizontal ? undefined : resolveValue(size),
        width: isHorizontal ? resolveValue(size) : undefined,
      }}
      aria-hidden={'true'}
      tabIndex={-1}
    />
  )
})
