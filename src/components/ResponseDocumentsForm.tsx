import { cpfMask } from 'utils/cpfMask'
import IconArrowRightWhite from '../assets/arrow-right-white.png'
import { useDataContext } from 'context/DataContext'
import { useNavigate } from 'react-router'
import { FormEvent } from 'react'

export default function ResponseDocumentsForm() {
  const { cpf, setCpf } = useDataContext()
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    navigate('/documents')
  }

  const handleInput = (value: string) => {
    const newValueMask = cpfMask(value)

    console.log(newValueMask)

    setCpf(newValueMask)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[291px] flex size-full flex-col items-center justify-center gap-9"
    >
      <h1 className="text-5xl text-primary-500">Recuperador de documentos</h1>
      <div className="relative w-full max-w-96">
        <input
          value={cpf}
          onChange={(e) => handleInput(e.currentTarget.value)}
          className="input-box-shadow w-full rounded-full bg-neutral-300 text-center text-3xl text-primary-500 lg:h-20"
          placeholder="Digite aqui seu CPF..."
        />
        <img
          className="absolute right-2 top-1/2 -translate-y-1/2"
          width={59}
          height={59}
          src={IconArrowRightWhite}
          alt="seta para direita branca"
        />
      </div>
    </form>
  )
}
