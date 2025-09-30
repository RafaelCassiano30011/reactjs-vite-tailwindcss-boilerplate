import AtestadoTeste from '../assets/atestado.pdf'

export interface DataMock {
  name: string
  cpf: string
  ult: string
  medicalRecord: string
  dateOfBirth: string
  lastVisit: string
  revenues: string[]
  medicalCertificates: string[]
  lastDocumentsVisit: string[]
}

const data: DataMock[] = [
  {
    name: 'William Rodrigues da Silva',
    cpf: '000.000.000-00',
    ult: '2298383',
    medicalRecord: '2023132234',
    dateOfBirth: '30/05/1990',
    lastVisit: '20/08/2025',
    revenues: [AtestadoTeste],
    medicalCertificates: [AtestadoTeste],
    lastDocumentsVisit: [AtestadoTeste]
  }
]

export { data }
