function SynCard({ syn }) {
  return (
    <div className="syn-card">
      <div className="syn-header">
        <span className="syn-word">{syn.mot}</span>
        <span className="syn-badge">{syn.classe}</span>
      </div>
      <div className="syn-body">
        <div className="section">
          <label>Définition</label>
          <p>{syn.definition}</p>
        </div>
        <div className="divider" />
        <div className="section">
          <label>Exemple</label>
          <p className="syn-exemple">« {syn.exemple} »</p>
        </div>
      </div>
    </div>
  )
}

export default SynCard