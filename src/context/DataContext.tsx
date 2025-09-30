import { createContext, ReactNode, useContext, useState } from 'react'

interface Props {
  cpf: string
  setCpf: React.Dispatch<React.SetStateAction<string>>
  documentSelected: string
  setDocumentSelected: React.Dispatch<React.SetStateAction<string>>
}

interface DataProviderProps {
  children: ReactNode
}

export const DataContext = createContext<Props>({} as Props)

const DataContextProvider = ({ children }: DataProviderProps) => {
  const [cpf, setCpf] = useState('')
  const [documentSelected, setDocumentSelected] = useState('')

  return (
    <DataContext.Provider
      value={{ cpf, setCpf, documentSelected, setDocumentSelected }}
    >
      {children}
    </DataContext.Provider>
  )
}

const useDataContext = () => {
  return useContext(DataContext)
}

export { DataContextProvider, useDataContext }
