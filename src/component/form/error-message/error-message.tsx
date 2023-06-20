type Props = {
  message: string
}

export const ErrorMessage = ({ message }: Props) => {
  return <span>{message}</span>
}
