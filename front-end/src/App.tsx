import React from 'react'
import './styles/global.css'
import Layout from './components/layout/Layout/Layout'
import Home from './pages/Home/Home'

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
