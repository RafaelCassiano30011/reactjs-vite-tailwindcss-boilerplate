import React from 'react'
import Title from './Title'
import { useDataContext } from 'context/DataContext'
import { data } from 'mocks/data'
import Card from './Card'

export default function Revenues() {
  const { cpf } = useDataContext()
  const pacient = data.find((item) => item.cpf == cpf)

  if (!pacient) return null

  const pacientHasRevenues = pacient.revenues.length > 0

  return (
    <div className="mb-3 mb-6 flex w-full flex-col gap-5 px-12">
      <Title text="Receitas" />
      {pacientHasRevenues ? (
        <div>
          {pacient.revenues.map((document) => (
            <Card key={document} document={document} />
          ))}
        </div>
      ) : (
        <span className="text-center text-3xl text-primary-500">
          Você ainda não possui receitas
        </span>
      )}
    </div>
  )
}
