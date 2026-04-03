function WordCard({ word, onRetour }) {
  return (
    <div className="fiche-mot">
      {onRetour && (
        <button className="fiche-retour" onClick={onRetour}>← Retour</button>
      )}
      <div className="fiche-top">
        <p className="fiche-classe">{word.classe}</p>
        <p className="fiche-titre">{word.mot}</p>
        {word.categorie && (
          <p className="fiche-categorie">{word.categorie}</p>
        )}
      </div>
      <div className="fiche-body">
        <div className="fiche-section">
          <label>Définition</label>
          <p>{word.definition}</p>
        </div>
        <div className="divider" />
        <div className="fiche-section">
          <label>Exemple</label>
          <p className="syn-exemple">« {word.exemple} »</p>
        </div>
        <div className="divider" />
        <div className="fiche-section">
          <label className="label-soutenu">✦ Synonymes soutenus</label>
          <div className="tags-row">
            {word.synonymes_soutenus.map(s => (
              <span key={s} className="tag soutenu">{s}</span>
            ))}
          </div>
        </div>
        {word.antonymes && word.antonymes.length > 0 && (
          <div className="fiche-section">
            <label>Antonymes</label>
            <div className="tags-row">
              {word.antonymes.map(a => (
                <span key={a} className="tag antonyme">{a}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default WordCard