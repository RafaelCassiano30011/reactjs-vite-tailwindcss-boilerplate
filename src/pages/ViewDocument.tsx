import React from 'react'
import ArrowRightBlue from '../assets/arrow-right-blue.png'
import { useNavigate } from 'react-router'
import Header from 'components/Header'
import { useDataContext } from 'context/DataContext'

export default function ViewDocument() {
  const navigate = useNavigate()
  const { documentSelected } = useDataContext()

  return (
    <div className="flex size-full flex-col">
      <Header />
      <div className="flex items-start">
        <button
          className="border-none bg-transparent outline-none"
          onClick={() => {
            navigate('/documents')
          }}
        >
          <img
            width={82}
            height={82}
            className="rotate-180"
            src={ArrowRightBlue}
            alt="Seta esquerda azul"
          />
        </button>

        <div className="size-full h-[1440px] max-w-[1057px]">
          <object
            width="100%"
            height="100%"
            data={documentSelected}
            type="application/pdf"
          ></object>
        </div>
      </div>
    </div>
  )
}
