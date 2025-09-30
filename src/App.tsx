import { BrowserRouter } from 'react-router'
import RoutesComponent from './routes/routes'
import { DataContextProvider } from 'context/DataContext'

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <RoutesComponent />
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
