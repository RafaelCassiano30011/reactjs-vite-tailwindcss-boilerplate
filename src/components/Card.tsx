import React from 'react'
import { useNavigate } from 'react-router'
import { useDataContext } from 'context/DataContext'

interface Props {
  document: string
}

export default function Card({ document }: Props) {
  const navigate = useNavigate()

  const { setDocumentSelected } = useDataContext()

  const handleDocument = () => {
    setDocumentSelected(document)
    navigate('/view-document')
  }

  return (
    <div
      onClick={handleDocument}
      className="relative flex h-[232px] w-full max-w-[332px] cursor-pointer rounded-lg border border-[#707070] bg-white"
    >
      <object
        onClick={handleDocument}
        width="100%"
        height="100%"
        data={document}
        type="application/pdf"
        className="cursor-pointer"
      ></object>
      <div className="absolute -bottom-px left-0 z-10 h-[75px] w-full rounded-t-lg border border-[#707070] bg-white"></div>
    </div>
  )
}
