import Header from 'components/Header'
import ResponseDocumentsForm from 'components/ResponseDocumentsForm'

export default function Home() {
  return (
    <div className="flex size-full flex-col">
      <Header />
      <ResponseDocumentsForm />
    </div>
  )
}
