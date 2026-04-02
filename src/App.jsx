import { useState } from 'react'
import Header from './components/Header'
import Encyclopedie from './pages/Encyclopedie'
import Richification from './pages/Richification'
import Quotidien from './pages/Quotidien'
import './App.css'

function App() {
  const [onglet, setOnglet] = useState('encyclopedie')

  return (
    <div className="app">
      <Header />
      <div className="page-content">
        {onglet === 'encyclopedie' && <Encyclopedie />}
        {onglet === 'richification' && <Richification />}
        {onglet === 'quotidien' && <Quotidien />}
      </div>
      <nav className="tab-bar">
        <button
          className={`tab ${onglet === 'encyclopedie' ? 'active' : ''}`}
          onClick={() => setOnglet('encyclopedie')}
        >
          <div className="tab-indicator" />
          <span className="tab-icon">📖</span>
          <span className="tab-label">Encyclopédie</span>
        </button>
        <button
          className={`tab ${onglet === 'richification' ? 'active' : ''}`}
          onClick={() => setOnglet('richification')}
        >
          <div className="tab-indicator" />
          <span className="tab-icon">✨</span>
          <span className="tab-label">Richification</span>
        </button>
        <button
          className={`tab ${onglet === 'quotidien' ? 'active' : ''}`}
          onClick={() => setOnglet('quotidien')}
        >
          <div className="tab-indicator" />
          <span className="tab-icon">📅</span>
          <span className="tab-label">Quotidien</span>
        </button>
      </nav>
    </div>
  )
}

export default App