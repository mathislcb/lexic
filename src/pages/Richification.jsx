import { useState } from 'react'
import SynCard from '../components/SynCard'
import richData from '../data/richification'
import vocabulary from '../data/index'

const normalize = str =>
  str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

function Richification() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [synonymes, setSynonymes] = useState([])
  const [motChoisi, setMotChoisi] = useState(null)
  const [ficheOuverte, setFicheOuverte] = useState(null)

  function handleInput(e) {
    const val = e.target.value
    setQuery(val)
    setMotChoisi(null)
    setSynonymes([])
    setFicheOuverte(null)

    if (val.trim().length < 1) {
      setSuggestions([])
      return
    }

    const found = richData.filter(w =>
      normalize(w.mot).startsWith(normalize(val))
    )
    setSuggestions(found)
  }

  function choisirMot(item) {
    setQuery(item.mot)
    setSuggestions([])
    setMotChoisi(item.mot)
    setSynonymes(item.synonymes_soutenus)
    setFicheOuverte(null)
  }

  function ouvrirFiche(syn) {
    const found = vocabulary.find(w =>
      normalize(w.mot) === normalize(syn.mot)
    )
    if (found) setFicheOuverte(found)
  }

  if (ficheOuverte) {
    return (
      <div className="richification">
        <div className="fiche-mot">
          <button className="fiche-retour" onClick={() => setFicheOuverte(null)}>← Retour</button>
          <div className="fiche-top">
            <p className="fiche-classe">{ficheOuverte.classe}</p>
            <p className="fiche-titre">{ficheOuverte.mot}</p>
          </div>
          <div className="fiche-body">
            <div className="fiche-section">
              <label>Définition</label>
              <p>{ficheOuverte.definition}</p>
            </div>
            <div className="divider" />
            <div className="fiche-section">
              <label>Exemple</label>
              <p className="syn-exemple">« {ficheOuverte.exemple} »</p>
            </div>
            <div className="divider" />
            <div className="fiche-section">
              <label className="label-soutenu">✦ Synonymes soutenus</label>
              <div className="tags-row">
                {ficheOuverte.synonymes_soutenus.map(s => (
                  <span key={s} className="tag soutenu">{s}</span>
                ))}
              </div>
            </div>
            {ficheOuverte.antonymes?.length > 0 && (
              <div className="fiche-section">
                <label>Antonymes</label>
                <div className="tags-row">
                  {ficheOuverte.antonymes.map(a => (
                    <span key={a} className="tag antonyme">{a}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="richification">
      <div className="search-label">Entrez un mot courant</div>
      <div className="search-box">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          placeholder="Ex : triste, rapide, parler…"
          value={query}
          onChange={handleInput}
        />
        {query.length > 0 && (
          <button className="clear-btn" onClick={() => {
            setQuery('')
            setSuggestions([])
            setSynonymes([])
            setMotChoisi(null)
            setFicheOuverte(null)
          }}>✕</button>
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions-list">
          {suggestions.map(item => (
            <div key={item.mot} className="suggestion-item" onClick={() => choisirMot(item)}>
              <span className="suggestion-mot">{item.mot}</span>
              <span className="suggestion-count">{item.synonymes_soutenus.length} synonymes</span>
            </div>
          ))}
        </div>
      )}

      {synonymes.length > 0 && (
        <>
          <p className="result-intro">
            {synonymes.length} synonyme{synonymes.length > 1 ? 's' : ''} soutenu{synonymes.length > 1 ? 's' : ''} pour <strong>{motChoisi}</strong>
          </p>
          <div className="cards-list">
            {synonymes.map(syn => {
              const dansEncyclopedie = vocabulary.some(w =>
                normalize(w.mot) === normalize(syn.mot)
              )
              return (
                <div key={syn.mot} className="syn-card-wrapper">
                  <SynCard syn={syn} />
                  {dansEncyclopedie && (
                    <button
                      className="voir-fiche-btn"
                      onClick={() => ouvrirFiche(syn)}
                    >
                      📖 Voir la fiche complète
                    </button>
                  )}
                </div>
              )
            })}
          </div>
        </>
      )}

      {query.length > 1 && suggestions.length === 0 && !motChoisi && (
        <p className="not-found">Aucun mot trouvé pour « {query} »</p>
      )}
    </div>
  )
}

export default Richification