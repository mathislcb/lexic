function WordCard({ word }) {
  return (
    <div className="word-card">
      <div className="word-header">
        <span className="word-title">{word.mot}</span>
        <span className="word-class">{word.classe}</span>
      </div>

      <div className="word-body">
        <div className="word-section">
          <label>Définition</label>
          <p>{word.definition}</p>
        </div>

        <div className="word-section">
          <label>Exemple</label>
          <p className="exemple">« {word.exemple} »</p>
        </div>

        <div className="divider" />

        <div className="word-section">
          <label className="label-soutenu">✦ Synonymes soutenus</label>
          <div className="tags-row">
            {word.synonymes_soutenus.map(s => (
              <span key={s} className="tag soutenu">{s}</span>
            ))}
          </div>
        </div>

        <div className="word-section">
          <label>Synonymes courants</label>
          <div className="tags-row">
            {word.synonymes.map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="word-section">
          <label>Antonymes</label>
          <div className="tags-row">
            {word.antonymes.map(a => (
              <span key={a} className="tag antonyme">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WordCard