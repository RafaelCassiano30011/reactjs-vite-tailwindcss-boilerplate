import Title from './Title'
import { data } from '../mocks/data'
import { useDataContext } from 'context/DataContext'

const infosShow = [
  'name',
  'cpf',
  'ult',
  'medicalRecord',
  'dateOfBirth',
  'lastVisit'
]

export default function MyInformations() {
  const { cpf } = useDataContext()

  const pacient = data.find((item) => item.cpf == cpf)

  if (!pacient) return null

  return (
    <div className="mx-auto mt-6 flex w-full max-w-[1394px] flex-col gap-6">
      <Title text="Suas informações" />
      <div className="flex items-center rounded-lg bg-neutral-300 px-16 py-8">
        {Object.keys(pacient).map((item) => {
          if (!infosShow.includes(item)) return null
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="flex items-center">
              <span className="text-3xl text-primary-500">
                {pacient[item]}
                <span className="text-xl text-primary-500">{'----'}</span>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
