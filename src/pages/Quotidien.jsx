import { useState, useEffect } from 'react'
import motsDuJour from '../data/motsDuJour'

function seededRandom(seed) {
  let s = seed
  return function() {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function melangerAvecGraine(tableau, graine) {
  const arr = [...tableau]
  const rand = seededRandom(graine)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function getMotDuJour() {
  const aujourdhui = new Date()
  const graine = aujourdhui.getFullYear() * 10000 +
    (aujourdhui.getMonth() + 1) * 100 +
    aujourdhui.getDate()
  const indexJour = Math.floor(
    (aujourdhui - new Date('2026-04-01')) / (1000 * 60 * 60 * 24)
  )
  const motsMelanges = melangerAvecGraine(motsDuJour, 42)
  const index = Math.abs(indexJour) % motsMelanges.length
  return { mot: motsMelanges[index] }
}

function getHistorique() {
  const historique = []
  const debut = new Date('2026-04-01')
  const aujourdhui = new Date()

  for (let i = 0; i <= 6; i++) {
    const date = new Date(aujourdhui)
    date.setDate(date.getDate() - i)
    const diffJours = Math.floor((date - debut) / (1000 * 60 * 60 * 24))
    const index = Math.abs(diffJours) % motsDuJour.length
    historique.push({
      date,
      mot: motsDuJour[index],
    })
  }
  return historique
}

function formatDate(date) {
  return date.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

function formatDateCourt(date) {
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
}

function Quotidien() {
  const [vue, setVue] = useState('main')
  const [motSelectionne, setMotSelectionne] = useState(null)
  const { mot } = getMotDuJour()
  const historique = getHistorique()

  function ouvrirHistorique(item) {
    setMotSelectionne(item)
    setVue('detail')
  }

  if (vue === 'calendrier') {
    return (
      <div className="quotidien">
        <div className="cal-entete">
          <h2>Historique des mots</h2>
          <button className="retour-btn" onClick={() => setVue('main')}>← Retour</button>
        </div>
        <div className="prev-list">
          {historique.map((item, i) => (
            <div key={i} className="prev-item" onClick={() => ouvrirHistorique(item)}>
              <span className="prev-date">{formatDateCourt(item.date)}</span>
              <span className="prev-mot">{item.mot.mot}</span>
              <span className="prev-classe">{item.mot.classe}</span>
              <span className="prev-arrow">›</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (vue === 'detail' && motSelectionne) {
    return (
      <div className="quotidien">
        <div className="cal-entete">
          <h2>{formatDateCourt(motSelectionne.date)}</h2>
          <button className="retour-btn" onClick={() => setVue('calendrier')}>← Retour</button>
        </div>
        <MotCard mot={motSelectionne.mot} />
      </div>
    )
  }

  return (
    <div className="quotidien">
      <div className="quotidien-entete">
        <p className="date-label">{formatDate(new Date())}</p>
        <button className="historique-btn" onClick={() => setVue('calendrier')}>📅 Historique</button>
      </div>
      <MotCard mot={mot} />
      <div className="streak">
        <span className="streak-icon">🔥</span>
        <div className="streak-text">
          <strong>Série en cours</strong>
          <span>Reviens demain pour continuer !</span>
        </div>
        <span className="streak-count">1</span>
      </div>
    </div>
  )
}

function MotCard({ mot }) {
  return (
    <div className="mot-card">
      <div className="mot-top">
        <p className="mot-classe">{mot.classe}</p>
        <p className="mot-titre">{mot.mot}</p>
        <p className="mot-phonetique">{mot.phonetique}</p>
      </div>
      <div className="mot-body">
        <div className="section">
          <label>Définition</label>
          <p>{mot.definition}</p>
        </div>
        <div className="divider" />
        <div className="section">
          <label>Exemple</label>
          <p className="syn-exemple">« {mot.exemple} »</p>
        </div>
        <div className="divider" />
        <div className="section">
          <label>Synonymes soutenus</label>
          <div className="tags-row">
            {mot.synonymes_soutenus.map(s => (
              <span key={s} className="tag soutenu">{s}</span>
            ))}
          </div>
        </div>
        <div className="section">
          <label>Antonymes</label>
          <div className="tags-row">
            {mot.antonymes.map(a => (
              <span key={a} className="tag antonyme">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quotidien