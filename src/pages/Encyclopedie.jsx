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

const sousCategoriesEmotions = [
  { id: 'joie',      label: 'Joie',      emoji: '😄' },
  { id: 'colere',    label: 'Colère',    emoji: '😡' },
  { id: 'tristesse', label: 'Tristesse', emoji: '😢' },
  { id: 'degout',    label: 'Dégoût',    emoji: '🤢' },
  { id: 'surprise',  label: 'Surprise',  emoji: '😲' },
  { id: 'honte',     label: 'Honte',     emoji: '😳' },
]

const sousCategoriesNature = [
  { id: 'eau',    label: 'Eau',    emoji: '💧' },
  { id: 'feu',    label: 'Feu',    emoji: '🔥' },
  { id: 'terre',  label: 'Terre',  emoji: '🌍' },
  { id: 'air',    label: 'Air',    emoji: '💨' },
  { id: 'foudre', label: 'Foudre', emoji: '⚡' },
]

const sousCategoriesCaractere = [
  { id: 'qualites', label: 'Qualités', emoji: '✨' },
  { id: 'defauts',  label: 'Défauts',  emoji: '🌑' },
]

const sousCategoriesIntellect = [
  { id: 'clarte',    label: 'Clarté & sagesse',      emoji: '💡' },
  { id: 'obscurite', label: 'Obscurité & tromperie', emoji: '🌫️' },
  { id: 'methode',   label: 'Méthode & approche',    emoji: '🔬' },
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

function ListeMots({ mots, onOuvrirMot, connus, toggleConnu, filtre }) {
  const motsFiltres = mots.filter(mot => {
    if (filtre === 'connu') return connus[mot.mot] === 'connu'
    if (filtre === 'inconnu') return connus[mot.mot] === 'inconnu'
    return true
  })

  if (motsFiltres.length === 0) {
    return (
      <div className="mots-list">
        <p className="not-found" style={{ padding: '24px', textAlign: 'center' }}>
          {filtre === 'connu' ? 'Aucun mot connu dans cette catégorie.' : 'Aucun mot à apprendre dans cette catégorie.'}
        </p>
      </div>
    )
  }

  return (
    <div className="mots-list">
      {motsFiltres.map(mot => (
        <div key={mot.mot} className="mot-item">
          <div className="mot-item-gauche" onClick={() => onOuvrirMot(mot)}>
            <span className="mot-item-titre">{mot.mot}</span>
            {mot.origine && <span className="mot-item-origine">📚 {mot.origine}</span>}
            <span className="mot-item-def">{mot.definition.slice(0, 55)}…</span>
          </div>
          <div className="mot-item-droite">
            <button
              className={`connaissance-btn ${connus[mot.mot] === 'connu' ? 'btn-connu' : connus[mot.mot] === 'inconnu' ? 'btn-inconnu' : ''}`}
              onClick={e => {
                e.stopPropagation()
                const actuel = connus[mot.mot]
                if (!actuel) toggleConnu(mot.mot, 'connu')
                else if (actuel === 'connu') toggleConnu(mot.mot, 'inconnu')
                else toggleConnu(mot.mot, null)
              }}
            >
              {connus[mot.mot] === 'connu' ? '✅' : connus[mot.mot] === 'inconnu' ? '❌' : '○'}
            </button>
            <span className="mot-item-arrow" onClick={() => onOuvrirMot(mot)}>›</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function SousCatList({ entete, items, getCount, onClick }) {
  return (
    <div className="encyclopedie">
      {entete}
      <div className="sous-cat-list">
        {items.map(item => (
          <div key={item.id} className="sous-cat-band" onClick={() => onClick(item)}>
            <span className="sous-cat-emoji">{item.emoji}</span>
            <span className="sous-cat-label">{item.label}</span>
            <span className="entete-count">{getCount(item.id)} mots</span>
            <span className="cat-arrow">›</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FiltreConnaissance({ filtre, setFiltre, connus, mots }) {
  const nbConnus = mots.filter(m => connus[m.mot] === 'connu').length
  const nbInconnus = mots.filter(m => connus[m.mot] === 'inconnu').length
  return (
    <div className="connaissance-filtres">
      <button
        className={`connaissance-case ${filtre === 'tous' ? 'actif' : ''}`}
        onClick={() => setFiltre('tous')}
      >
        <span>📚</span>
        <span>Tous</span>
        <span className="case-count">{mots.length}</span>
      </button>
      <button
        className={`connaissance-case ${filtre === 'connu' ? 'actif' : ''}`}
        onClick={() => setFiltre('connu')}
      >
        <span>✅</span>
        <span>Je connais</span>
        <span className="case-count">{nbConnus}</span>
      </button>
      <button
        className={`connaissance-case ${filtre === 'inconnu' ? 'actif' : ''}`}
        onClick={() => setFiltre('inconnu')}
      >
        <span>📝</span>
        <span>À apprendre</span>
        <span className="case-count">{nbInconnus}</span>
      </button>
    </div>
  )
}

function Encyclopedie({ connus, toggleConnu }) {
  const [vue, setVue] = useState('accueil')
  const [catActive, setCatActive] = useState(null)
  const [sousCatActive, setSousCatActive] = useState(null)
  const [sensSousCat, setSensSousCat] = useState(null)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [result, setResult] = useState(null)
  const [motOuvert, setMotOuvert] = useState(null)
  const [filtre, setFiltre] = useState('tous')

  function ouvrirCategorie(catId) {
    setCatActive(catId)
    setSousCatActive(null)
    setSensSousCat(null)
    setVue('categorie')
    setQuery('')
    setSuggestions([])
    setResult(null)
    setFiltre('tous')
  }

  function ouvrirSousCategorie(sousCat) {
    setSousCatActive(sousCat)
    setSensSousCat(null)
    setVue('sous_categorie')
    setFiltre('tous')
  }

  function ouvrirSens(sens) {
    setSensSousCat(sens)
    setVue('sens')
    setFiltre('tous')
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

  const entete = (titre, emoji) => (
    <div className="page-entete" style={{ background: cat?.color, color: cat?.text }}>
      <button className="retour-btn" style={{ color: cat?.text }} onClick={retour}>← Retour</button>
      <span className="entete-titre">{emoji} {titre}</span>
    </div>
  )

  // Fiche mot
  if (vue === 'fiche' && motOuvert) {
    return (
      <div className="encyclopedie">
        <WordCard word={motOuvert} onRetour={retour} />
      </div>
    )
  }

  // Vue sens (sous-sous-catégorie)
  if (vue === 'sens' && sensSousCat) {
    let mots = []
    if (sousCatActive?.id === 'sensoriels') mots = parCat?.sensoriels?.[sensSousCat.id] || []
    else if (sousCatActive?.id === 'emotions') mots = parCat?.emotions?.[sensSousCat.id] || []
    else if (sousCatActive?.id === 'nature') mots = parCat?.nature?.[sensSousCat.id] || []
    else if (sousCatActive?.id === 'caractere') mots = parCat?.caractere?.[sensSousCat.id] || []
    else if (sousCatActive?.id === 'intellect') mots = parCat?.intellect?.[sensSousCat.id] || []

    return (
      <div className="encyclopedie">
        <div className="page-entete" style={{ background: cat?.color, color: cat?.text }}>
          <button className="retour-btn" style={{ color: cat?.text }} onClick={retour}>← Retour</button>
          <span className="entete-titre">{sensSousCat.emoji} {sensSousCat.label}</span>
          <span className="entete-count">{mots.length} mots</span>
        </div>
        <FiltreConnaissance filtre={filtre} setFiltre={setFiltre} connus={connus} mots={mots} />
        <ListeMots mots={mots} onOuvrirMot={ouvrirMot} connus={connus} toggleConnu={toggleConnu} filtre={filtre} />
      </div>
    )
  }

  // Sous-catégorie
  if (vue === 'sous_categorie' && sousCatActive) {
    const id = sousCatActive.id

    if (id === 'sensoriels' && parCat?.sensoriels) {
      return <SousCatList
        entete={entete(sousCatActive.label, sousCatActive.emoji)}
        items={sousCategoriesSensoriels}
        getCount={sid => (parCat.sensoriels[sid] || []).length}
        onClick={ouvrirSens}
      />
    }
    if (id === 'emotions' && parCat?.emotions) {
      return <SousCatList
        entete={entete(sousCatActive.label, sousCatActive.emoji)}
        items={sousCategoriesEmotions}
        getCount={sid => (parCat.emotions[sid] || []).length}
        onClick={ouvrirSens}
      />
    }
    if (id === 'nature' && parCat?.nature) {
      return <SousCatList
        entete={entete(sousCatActive.label, sousCatActive.emoji)}
        items={sousCategoriesNature}
        getCount={sid => (parCat.nature[sid] || []).length}
        onClick={ouvrirSens}
      />
    }
    if (id === 'caractere' && parCat?.caractere) {
      return <SousCatList
        entete={entete(sousCatActive.label, sousCatActive.emoji)}
        items={sousCategoriesCaractere}
        getCount={sid => (parCat.caractere[sid] || []).length}
        onClick={ouvrirSens}
      />
    }
    if (id === 'intellect' && parCat?.intellect) {
      return <SousCatList
        entete={entete(sousCatActive.label, sousCatActive.emoji)}
        items={sousCategoriesIntellect}
        getCount={sid => (parCat.intellect[sid] || []).length}
        onClick={ouvrirSens}
      />
    }

    const mots = parCat?.[id] || []
    return (
      <div className="encyclopedie">
        <div className="page-entete" style={{ background: cat?.color, color: cat?.text }}>
          <button className="retour-btn" style={{ color: cat?.text }} onClick={retour}>← Retour</button>
          <span className="entete-titre">{sousCatActive.emoji} {sousCatActive.label}</span>
          <span className="entete-count">{mots.length} mots</span>
        </div>
        <FiltreConnaissance filtre={filtre} setFiltre={setFiltre} connus={connus} mots={mots} />
        <ListeMots mots={mots} onOuvrirMot={ouvrirMot} connus={connus} toggleConnu={toggleConnu} filtre={filtre} />
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