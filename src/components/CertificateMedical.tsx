import React from 'react'
import Title from './Title'
import { useDataContext } from 'context/DataContext'
import { data } from 'mocks/data'
import Card from './Card'

export default function CertificateMedical() {
  const { cpf } = useDataContext()
  const pacient = data.find((item) => item.cpf == cpf)

  if (!pacient) return null

  const pacientHasMedicalCertificates = pacient.medicalCertificates.length > 0

  return (
    <div className="mb-3 flex w-full flex-col gap-5 px-12">
      <Title text="Atestados médicos" />
      {pacientHasMedicalCertificates ? (
        <div>
          {pacient.medicalCertificates.map((document) => (
            <Card key={document} document={document} />
          ))}
        </div>
      ) : (
        <span className="text-center text-3xl text-primary-500">
          Você ainda não possui Atestados Medicos
        </span>
      )}
    </div>
  )
}
