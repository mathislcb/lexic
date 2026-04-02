import { useState } from 'react'
import WordCard from './WordCard'

import vocabulary from '../data/index'

function SearchBar({ category }) {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [notFound, setNotFound] = useState(false)

  function handleSearch(e) {
    const val = e.target.value
    setQuery(val)

    if (val.trim().length < 2) {
      setResult(null)
      setNotFound(false)
      return
    }

    const normalize = str =>
    str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

    const found = vocabulary.find(w =>
    normalize(w.mot).includes(normalize(val)) &&
    (category ? w.classe === category : true)
    )

    if (found) {
      setResult(found)
      setNotFound(false)
    } else {
      setResult(null)
      setNotFound(true)
    }
  }

  return (
    <div className="search-section">
      <div className="search-label">Rechercher un mot</div>
      <div className="search-box">
        <span className="search-icon">⌕</span>
        <input
          type="text"
          placeholder="Ex : obscur, frémir, langueur…"
          value={query}
          onChange={handleSearch}
        />
      </div>

      {result && <WordCard word={result} />}
      {notFound && (
        <div className="not-found">Aucun mot trouvé pour « {query} »</div>
      )}
    </div>
  )
}

export default SearchBar