import { useState, useEffect } from 'react'
import Header from './components/Header'
import Encyclopedie from './pages/Encyclopedie'
import Richification from './pages/Richification'
import Quotidien from './pages/Quotidien'
import Quizz from './pages/Quizz'
import Onboarding from './components/Onboarding'

function App() {
  const [onglet, setOnglet] = useState('encyclopedie')
  const [connus, setConnus] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lexic_connus') || '{}') }
    catch { return {} }
  })
  const [onboardingFait, setOnboardingFait] = useState(() => {
    return localStorage.getItem('lexic_onboarding') === 'done'
  })

  function toggleConnu(mot, statut) {
    const nouveau = { ...connus, [mot]: statut }
    setConnus(nouveau)
    localStorage.setItem('lexic_connus', JSON.stringify(nouveau))
  }

  if (!onboardingFait) {
    return <Onboarding onTermine={() => {
      localStorage.setItem('lexic_onboarding', 'done')
      setOnboardingFait(true)
    }} />
  }

  return (
    <div className="app">
      <Header />
      <div className="content">
        {onglet === 'encyclopedie' && <Encyclopedie connus={connus} toggleConnu={toggleConnu} />}
        {onglet === 'richification' && <Richification />}
        {onglet === 'quizz' && <Quizz connus={connus} toggleConnu={toggleConnu} />}
        {onglet === 'quotidien' && <Quotidien />}
      </div>
      <nav className="tab-bar">
        <button className={`tab ${onglet === 'encyclopedie' ? 'active' : ''}`} onClick={() => setOnglet('encyclopedie')}>
          <span className="tab-icon">📖</span>
          <span className="tab-label">Encyclopédie</span>
        </button>
        <button className={`tab ${onglet === 'richification' ? 'active' : ''}`} onClick={() => setOnglet('richification')}>
          <span className="tab-icon">✨</span>
          <span className="tab-label">Richification</span>
        </button>
        <button className={`tab ${onglet === 'quizz' ? 'active' : ''}`} onClick={() => setOnglet('quizz')}>
          <span className="tab-icon">🧠</span>
          <span className="tab-label">Quizz</span>
        </button>
        <button className={`tab ${onglet === 'quotidien' ? 'active' : ''}`} onClick={() => setOnglet('quotidien')}>
          <span className="tab-icon">☀️</span>
          <span className="tab-label">Quotidien</span>
        </button>
      </nav>
    </div>
  )
}

export default App