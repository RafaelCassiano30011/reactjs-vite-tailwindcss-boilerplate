import React from 'react'
import Title from './Title'
import { useDataContext } from 'context/DataContext'
import { data } from 'mocks/data'
import Card from './Card'

export default function LastVisit() {
  const { cpf } = useDataContext()
  const pacient = data.find((item) => item.cpf == cpf)

  if (!pacient) return null

  const pacientLastVisitHasDocument = pacient.lastDocumentsVisit.length > 0

  return (
    <div className="mb-3 flex w-full flex-col gap-5 px-12">
      <Title text="Últimos vistos" />
      {pacientLastVisitHasDocument ? (
        <div>
          {pacient.lastDocumentsVisit.map((document) => (
            <Card key={document} document={document} />
          ))}
        </div>
      ) : (
        <span className="text-center text-3xl text-primary-500">
          Você ainda não visualizou documentos
        </span>
      )}
    </div>
  )
}
