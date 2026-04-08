import { useState } from 'react'

const ETAPES = [
  {
    icon: '📖',
    titre: 'Bienvenue sur Lexic',
    texte: 'Lexic est ton compagnon pour enrichir ton vocabulaire français. Découvre des mots rares, élégants et soutenus.',
  },
  {
    icon: '🗂️',
    titre: 'L\'Encyclopédie',
    texte: 'Explore des centaines de mots classés par catégories — émotions, nature, caractère, intellect... Coche ceux que tu connais déjà !',
  },
  {
    icon: '✨',
    titre: 'La Richification',
    texte: 'Tape un mot courant comme "triste" ou "beau" et découvre ses synonymes soutenus pour enrichir ton expression.',
  },
  {
    icon: '🧠',
    titre: 'Le Quizz',
    texte: 'Teste tes connaissances avec 4 types de quizz différents. Enchaîne les bonnes réponses pour construire ta série !',
  },
  {
    icon: '☀️',
    titre: 'Le Mot du Jour',
    texte: 'Chaque jour un nouveau mot t\'attend. Reviens quotidiennement pour enrichir ton vocabulaire progressivement.',
  },
]

export default function Onboarding({ onTermine }) {
  const [etape, setEtape] = useState(0)

  const estDernier = etape === ETAPES.length - 1
  const e = ETAPES[etape]

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-card">
        <div className="onboarding-icon">{e.icon}</div>
        <h2 className="onboarding-titre">{e.titre}</h2>
        <p className="onboarding-texte">{e.texte}</p>

        <div className="onboarding-dots">
          {ETAPES.map((_, i) => (
            <span key={i} className={`onboarding-dot ${i === etape ? 'actif' : ''}`} />
          ))}
        </div>

        <div className="onboarding-actions">
          {etape > 0 && (
            <button className="onboarding-btn-back" onClick={() => setEtape(e => e - 1)}>
              ←
            </button>
          )}
          <button
            className="onboarding-btn-next"
            onClick={() => estDernier ? onTermine() : setEtape(e => e + 1)}
          >
            {estDernier ? 'Commencer 🚀' : 'Suivant →'}
          </button>
        </div>

        {!estDernier && (
          <button className="onboarding-skip" onClick={onTermine}>
            Passer
          </button>
        )}
      </div>
    </div>
  )
}