import Documents from 'pages/Documents'
import Home from 'pages/Home'
import ViewDocument from 'pages/ViewDocument'
import { Routes, Route } from 'react-router'

export default function RoutesComponent() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/view-document" element={<ViewDocument />} />
    </Routes>
  )
}
