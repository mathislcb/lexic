import { useState } from 'react'
import SynCard from '../components/SynCard'
import richData from '../data/richification'

const normalize = str =>
  str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

function Richification() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [synonymes, setSynonymes] = useState([])
  const [motChoisi, setMotChoisi] = useState(null)

  function handleInput(e) {
    const val = e.target.value
    setQuery(val)
    setMotChoisi(null)
    setSynonymes([])

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
          }}>✕</button>
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions-list">
          {suggestions.map(item => (
            <div
              key={item.mot}
              className="suggestion-item"
              onClick={() => choisirMot(item)}
            >
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
            {synonymes.map(syn => (
              <SynCard key={syn.mot} syn={syn} />
            ))}
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