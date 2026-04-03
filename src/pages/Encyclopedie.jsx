import { useState } from 'react'
import vocabulary from '../data/index'
import { parCategorie as parCatAdjectifs } from '../data/adjectifs/index'
import { parCategorie as parCatNoms } from '../data/noms/index'
import { parCategorie as parCatVerbes } from '../data/verbes/index'
import { parCategorie as parCatAdverbes } from '../data/adverbes/index'
import { parCategorie as parCatExpressions } from '../data/expressions/index'
import WordCard from '../components/WordCard'

const categories = [
  { id: 'adjectifs',   label: 'Adjectifs',   color: '#E6F1FB', text: '#0C447C', dot: '#378ADD' },
  { id: 'noms',        label: 'Noms',        color: '#EAF3DE', text: '#27500A', dot: '#639922' },
  { id: 'verbes',      label: 'Verbes',      color: '#FAEEDA', text: '#633806', dot: '#BA7517' },
  { id: 'adverbes',    label: 'Adverbes',    color: '#FBEAF0', text: '#72243E', dot: '#D4537E' },
  { id: 'expressions', label: 'Expressions', color: '#EEEDFE', text: '#3C3489', dot: '#7F77DD' },
]

const sousCategoriesParClasse = {
  adjectifs: [
    { id: 'sensoriels', label: 'Sensoriels',              emoji: '👁️' },
    { id: 'emotions',   label: 'Émotions & états d\'âme', emoji: '🎭' },
    { id: 'caractere',  label: 'Caractère & personnalité', emoji: '👤' },
    { id: 'intellect',  label: 'Intellect & jugement',    emoji: '🧠' },
    { id: 'temps',      label: 'Temps & existence',       emoji: '⏳' },
    { id: 'nature',     label: 'Nature & espace',         emoji: '🌿' },
  ],
  noms: [
    { id: 'sensoriels', label: 'Sensoriels',              emoji: '👁️' },
    { id: 'emotions',   label: 'Émotions & états d\'âme', emoji: '🎭' },
    { id: 'caractere',  label: 'Caractère & personnalité', emoji: '👤' },
    { id: 'intellect',  label: 'Intellect & jugement',    emoji: '🧠' },
    { id: 'temps',      label: 'Temps & existence',       emoji: '⏳' },
    { id: 'nature',     label: 'Nature & espace',         emoji: '🌿' },
  ],
  verbes: [
    { id: 'sensoriels', label: 'Sensoriels',              emoji: '👁️' },
    { id: 'emotions',   label: 'Émotions & états d\'âme', emoji: '🎭' },
    { id: 'caractere',  label: 'Caractère & personnalité', emoji: '👤' },
    { id: 'intellect',  label: 'Intellect & jugement',    emoji: '🧠' },
    { id: 'mouvement',  label: 'Action & mouvement',      emoji: '⚡' },
  ],
  adverbes: [
    { id: 'intensite', label: 'Intensité', emoji: '🔥' },
    { id: 'temps',     label: 'Temps',     emoji: '⏳' },
    { id: 'maniere',   label: 'Manière',   emoji: '🎯' },
  ],
  expressions: [
    { id: 'sansReference', label: 'Sans référence', emoji: '💬' },
    { id: 'avecReference', label: 'Avec référence', emoji: '📚' },
  ],
}

const sousCategoriesSensoriels = [
  { id: 'vue',     label: 'Vue',     emoji: '👁️' },
  { id: 'ouie',    label: 'Ouïe',    emoji: '👂' },
  { id: 'odorat',  label: 'Odorat',  emoji: '👃' },
  { id: 'gout',    label: 'Goût',    emoji: '👅' },
  { id: 'toucher', label: 'Toucher', emoji: '✋' },
]

const parCategorieParClasse = {
  adjectifs: parCatAdjectifs,
  noms: parCatNoms,
  verbes: parCatVerbes,
  adverbes: parCatAdverbes,
  expressions: parCatExpressions,
}

const normalize = str =>
  str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

function ListeMots({ mots, onOuvrirMot }) {
  return (
    <div className="mots-list">
      {mots.map(mot => (
        <div key={mot.mot} className="mot-item" onClick={() => onOuvrirMot(mot)}>
          <div className="mot-item-gauche">
            <span className="mot-item-titre">{mot.mot}</span>
            {mot.origine && <span className="mot-item-origine">📚 {mot.origine}</span>}
            <span className="mot-item-def">{mot.definition.slice(0, 55)}…</span>
          </div>
          <span className="mot-item-arrow">›</span>
        </div>
      ))}
    </div>
  )
}

function Encyclopedie() {
  const [vue, setVue] = useState('accueil')
  const [catActive, setCatActive] = useState(null)
  const [sousCatActive, setSousCatActive] = useState(null)
  const [sensSousCat, setSensSousCat] = useState(null)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [result, setResult] = useState(null)
  const [motOuvert, setMotOuvert] = useState(null)

  function ouvrirCategorie(catId) {
    setCatActive(catId)
    setSousCatActive(null)
    setSensSousCat(null)
    setVue('categorie')
    setQuery('')
    setSuggestions([])
    setResult(null)
  }

  function ouvrirSousCategorie(sousCat) {
    setSousCatActive(sousCat)
    setSensSousCat(null)
    setVue('sous_categorie')
  }

  function ouvrirSens(sens) {
    setSensSousCat(sens)
    setVue('sens')
  }

  function ouvrirMot(mot) {
    setMotOuvert(mot)
    setVue('fiche')
  }

  function retour() {
    if (vue === 'fiche') {
      if (sensSousCat) setVue('sens')
      else if (sousCatActive) setVue('sous_categorie')
      else setVue('categorie')
    } else if (vue === 'sens') {
      setVue('sous_categorie')
    } else if (vue === 'sous_categorie') {
      setVue('categorie')
    } else if (vue === 'categorie') {
      setVue('accueil')
    }
  }

  function handleInput(e) {
    const val = e.target.value
    setQuery(val)
    setResult(null)
    if (val.trim().length < 1) { setSuggestions([]); return }
    const found = vocabulary.filter(w =>
      normalize(w.mot).startsWith(normalize(val))
    )
    setSuggestions(found)
  }

  function choisirMot(item) {
    setQuery(item.mot)
    setSuggestions([])
    setResult(item)
  }

  const cat = catActive ? categories.find(c => c.id === catActive) : null
  const parCat = catActive ? parCategorieParClasse[catActive] : null

  // Fiche mot
  if (vue === 'fiche' && motOuvert) {
    return (
      <div className="encyclopedie">
        <WordCard word={motOuvert} onRetour={retour} />
      </div>
    )
  }

  // Vue sens
  if (vue === 'sens' && sensSousCat) {
    const mots = parCat?.sensoriels?.[sensSousCat.id] || []
    return (
      <div className="encyclopedie">
        <div className="page-entete" style={{ background: cat?.color, color: cat?.text }}>
          <button className="retour-btn" style={{ color: cat?.text }} onClick={retour}>← Retour</button>
          <span className="entete-titre">{sensSousCat.emoji} {sensSousCat.label}</span>
          <span className="entete-count">{mots.length} mots</span>
        </div>
        <ListeMots mots={mots} onOuvrirMot={ouvrirMot} />
      </div>
    )
  }

  // Sous-catégorie
  if (vue === 'sous_categorie' && sousCatActive) {
    const estSensoriels = sousCatActive.id === 'sensoriels' && parCat?.sensoriels

    if (estSensoriels) {
      return (
        <div className="encyclopedie">
          <div className="page-entete" style={{ background: cat?.color, color: cat?.text }}>
            <button className="retour-btn" style={{ color: cat?.text }} onClick={retour}>← Retour</button>
            <span className="entete-titre">{sousCatActive.emoji} {sousCatActive.label}</span>
          </div>
          <div className="sous-cat-list">
            {sousCategoriesSensoriels.map(sens => {
              const mots = parCat.sensoriels[sens.id] || []
              return (
                <div key={sens.id} className="sous-cat-band" onClick={() => ouvrirSens(sens)}>
                  <span className="sous-cat-emoji">{sens.emoji}</span>
                  <span className="sous-cat-label">{sens.label}</span>
                  <span className="entete-count">{mots.length} mots</span>
                  <span className="cat-arrow">›</span>
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    const mots = parCat?.[sousCatActive.id] || []
    return (
      <div className="encyclopedie">
        <div className="page-entete" style={{ background: cat?.color, color: cat?.text }}>
          <button className="retour-btn" style={{ color: cat?.text }} onClick={retour}>← Retour</button>
          <span className="entete-titre">{sousCatActive.emoji} {sousCatActive.label}</span>
          <span className="entete-count">{mots.length} mots</span>
        </div>
        <ListeMots mots={mots} onOuvrirMot={ouvrirMot} />
      </div>
    )
  }

  // Vue catégorie
  if (vue === 'categorie' && catActive) {
    const sousCats = sousCategoriesParClasse[catActive]
    return (
      <div className="encyclopedie">
        <div className="page-entete" style={{ background: cat?.color, color: cat?.text }}>
          <button className="retour-btn" style={{ color: cat?.text }} onClick={retour}>← Retour</button>
          <span className="entete-titre">{cat?.label}</span>
        </div>
        <div className="sous-cat-list">
          {sousCats.map(sc => (
            <div key={sc.id} className="sous-cat-band" onClick={() => ouvrirSousCategorie(sc)}>
              <span className="sous-cat-emoji">{sc.emoji}</span>
              <span className="sous-cat-label">{sc.label}</span>
              <span className="cat-arrow">›</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Accueil
  return (
    <div className="encyclopedie">
      <div className="cat-list">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="cat-band"
            style={{ background: cat.color, color: cat.text }}
            onClick={() => ouvrirCategorie(cat.id)}
          >
            <span className="cat-dot" style={{ background: cat.dot }} />
            <span>{cat.label}</span>
            <span className="cat-count">
              {vocabulary.filter(w => w.classe === cat.id).length} mots
            </span>
            <span className="cat-arrow">›</span>
          </div>
        ))}
      </div>

      <div className="encyclo-search">
        <div className="search-label">Rechercher un mot</div>
        <div className="search-box">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Ex : frémir, langueur…"
            value={query}
            onChange={handleInput}
          />
          {query.length > 0 && (
            <button className="clear-btn" onClick={() => {
              setQuery(''); setSuggestions([]); setResult(null)
            }}>✕</button>
          )}
        </div>
        {suggestions.length > 0 && (
          <div className="suggestions-list">
            {suggestions.map(item => (
              <div key={item.mot} className="suggestion-item" onClick={() => choisirMot(item)}>
                <span className="suggestion-mot">{item.mot}</span>
                <span className="suggestion-count">{item.classe}</span>
              </div>
            ))}
          </div>
        )}
        {result && <WordCard word={result} onRetour={() => setResult(null)} />}
        {query.length > 1 && suggestions.length === 0 && !result && (
          <p className="not-found">Aucun résultat pour « {query} »</p>
        )}
      </div>
    </div>
  )
}

export default Encyclopedie