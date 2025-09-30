import CertificateMedical from 'components/CertificateMedical'
import Header from 'components/Header'
import LastVisit from 'components/LastVisit'
import MyInformations from 'components/MyInformations'
import Revenues from 'components/Revenues'

export default function Documents() {
  return (
    <div className="flex size-full flex-col">
      <Header />
      <MyInformations />
      {/*Daria para deixar esses tres em um so padrão*/}
      <LastVisit />
      <Revenues />
      <CertificateMedical />
      {/*end*/}
    </div>
  )
}
