interface Props {
  text: string
}

export default function Title({ text }: Props) {
  return <h3 className="text-4xl text-primary-500">{text}</h3>
}
