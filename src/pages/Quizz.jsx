import { useState, useEffect } from 'react'
import vocabulary from '../data/index'

const TYPES_QUIZZ = [
  { id: 'definition', label: 'Trouve le mot', icon: '🔍', description: 'Devine le mot à partir de sa définition' },
  { id: 'synonyme', label: 'Synonymes', icon: '🔗', description: 'Trouve un synonyme soutenu du mot' },
  { id: 'classe', label: 'Nature du mot', icon: '🏷️', description: 'Identifie si c\'est un nom, verbe ou adjectif' },
  { id: 'exemple', label: 'Mot manquant', icon: '✍️', description: 'Trouve le mot manquant dans la phrase' },
]

function melanger(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function genererQuestion(type, mots) {
  const mot = mots[Math.floor(Math.random() * mots.length)]
  const autres = melanger(mots.filter(m => m.mot !== mot.mot)).slice(0, 3)

  if (type === 'definition') {
    const choix = melanger([mot, ...autres])
    return {
      type,
      question: mot.definition,
      bonne: mot.mot,
      choix: choix.map(m => m.mot),
      mot,
    }
  }

  if (type === 'synonyme') {
    if (!mot.synonymes_soutenus || mot.synonymes_soutenus.length === 0) return genererQuestion(type, mots)
    const bonSyn = mot.synonymes_soutenus[Math.floor(Math.random() * mot.synonymes_soutenus.length)]
    const faux = melanger(mots.filter(m => m.mot !== mot.mot && m.synonymes_soutenus?.length > 0))
      .slice(0, 3)
      .map(m => m.synonymes_soutenus[0])
    const choix = melanger([bonSyn, ...faux])
    return {
      type,
      question: `Quel est un synonyme soutenu de "${mot.mot}" ?`,
      bonne: bonSyn,
      choix,
      mot,
    }
  }

  if (type === 'classe') {
    const classes = ['adjectifs', 'noms', 'verbes', 'adverbes']
    const choix = melanger(classes)
    return {
      type,
      question: `Quelle est la nature du mot "${mot.mot}" ?`,
      bonne: mot.classe,
      choix,
      mot,
    }
  }

  if (type === 'exemple') {
    if (!mot.exemple) return genererQuestion(type, mots)
    const phraseTrouee = mot.exemple.replace(new RegExp(mot.mot, 'gi'), '___')
    const autres3 = melanger(mots.filter(m => m.mot !== mot.mot)).slice(0, 3).map(m => m.mot)
    const choix = melanger([mot.mot, ...autres3])
    return {
      type,
      question: phraseTrouee,
      bonne: mot.mot,
      choix,
      mot,
    }
  }
}

export default function Quizz({ connus, toggleConnu }) {
  const [vue, setVue] = useState('menu')
  const [typeChoisi, setTypeChoisi] = useState(null)
  const [question, setQuestion] = useState(null)
  const [reponse, setReponse] = useState(null)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [serie, setSerie] = useState(0)
  const [meilleuresSerie, setMeilleuresSerie] = useState(() => {
    try { return parseInt(localStorage.getItem('lexic_meilleure_serie') || '0') }
    catch { return 0 }
  })

  const mots = vocabulary.filter(m => m.mot && m.definition)

  function demarrer(type) {
    setTypeChoisi(type)
    setScore(0)
    setTotal(0)
    setSerie(0)
    setVue('quizz')
    nouvelleQuestion(type)
  }

  function nouvelleQuestion(type) {
    setReponse(null)
    setQuestion(genererQuestion(type || typeChoisi, mots))
  }

  function repondre(choix) {
    if (reponse) return
    const correct = choix === question.bonne
    setReponse({ choix, correct })
    setTotal(t => t + 1)
    if (correct) {
      setScore(s => s + 1)
      setSerie(s => {
        const nouv = s + 1
        if (nouv > meilleuresSerie) {
          setMeilleuresSerie(nouv)
          localStorage.setItem('lexic_meilleure_serie', String(nouv))
        }
        return nouv
      })
    } else {
      setSerie(0)
    }
  }

  if (vue === 'menu') {
    return (
      <div className="quizz-page">
        <div className="quizz-header">
          <h2>Quizz</h2>
          <p className="quizz-subtitle">Teste tes connaissances</p>
          {meilleuresSerie > 0 && (
            <div className="quizz-meilleure">🏆 Meilleure série : {meilleuresSerie}</div>
          )}
        </div>
        <div className="quizz-types">
          {TYPES_QUIZZ.map(t => (
            <button key={t.id} className="quizz-type-card" onClick={() => demarrer(t.id)}>
              <span className="quizz-type-icon">{t.icon}</span>
              <div className="quizz-type-info">
                <strong>{t.label}</strong>
                <span>{t.description}</span>
              </div>
              <span className="quizz-type-arrow">›</span>
            </button>
          ))}
        </div>
        <div className="quizz-stats-mini">
          <div className="stat-mini">
            <strong>{Object.values(connus).filter(v => v === 'connu').length}</strong>
            <span>mots connus</span>
          </div>
          <div className="stat-mini">
            <strong>{Object.values(connus).filter(v => v === 'inconnu').length}</strong>
            <span>à apprendre</span>
          </div>
          <div className="stat-mini">
            <strong>{mots.length}</strong>
            <span>mots total</span>
          </div>
        </div>
      </div>
    )
  }

  if (vue === 'quizz' && question) {
    const labelClasse = { adjectifs: 'adjectif', noms: 'nom', verbes: 'verbe', adverbes: 'adverbe' }
    return (
      <div className="quizz-page">
        <div className="quizz-top">
          <button className="quizz-retour" onClick={() => setVue('menu')}>← Menu</button>
          <div className="quizz-score-bar">
            <span>✅ {score}/{total}</span>
            {serie >= 3 && <span className="quizz-serie">🔥 {serie}</span>}
          </div>
        </div>

        <div className="quizz-card">
          <div className="quizz-type-badge">
            {TYPES_QUIZZ.find(t => t.id === typeChoisi)?.icon} {TYPES_QUIZZ.find(t => t.id === typeChoisi)?.label}
          </div>
          <p className="quizz-question">{question.question}</p>

          <div className="quizz-choix">
            {question.choix.map(c => {
              let classe = 'quizz-choix-btn'
              if (reponse) {
                if (c === question.bonne) classe += ' correct'
                else if (c === reponse.choix && !reponse.correct) classe += ' incorrect'
              }
              return (
                <button key={c} className={classe} onClick={() => repondre(c)}>
                  {labelClasse[c] || c}
                </button>
              )
            })}
          </div>

          {reponse && (
            <div className={`quizz-feedback ${reponse.correct ? 'feedback-correct' : 'feedback-incorrect'}`}>
              <div className="feedback-emoji">{reponse.correct ? '🎉' : '💡'}</div>
              <div className="feedback-mot">{question.mot.mot}</div>
              <div className="feedback-def">{question.mot.definition}</div>
              <div className="feedback-actions">
                <button
                  className={`feedback-connais ${connus[question.mot.mot] === 'connu' ? 'actif' : ''}`}
                  onClick={() => toggleConnu(question.mot.mot, connus[question.mot.mot] === 'connu' ? null : 'connu')}
                >
                  {connus[question.mot.mot] === 'connu' ? '✅ Je connais' : '○ Je connais'}
                </button>
                <button className="feedback-suivant" onClick={() => nouvelleQuestion()}>
                  Question suivante →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}