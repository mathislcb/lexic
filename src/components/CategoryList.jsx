const categories = [
  { id: 'adjectifs', label: 'Adjectifs', color: '#E6F1FB', text: '#0C447C', dot: '#378ADD' },
  { id: 'noms',      label: 'Noms',      color: '#EAF3DE', text: '#27500A', dot: '#639922' },
  { id: 'verbes',    label: 'Verbes',    color: '#FAEEDA', text: '#633806', dot: '#BA7517' },
  { id: 'adverbes',  label: 'Adverbes',  color: '#FBEAF0', text: '#72243E', dot: '#D4537E' },
  { id: 'expressions', label: 'Expressions', color: '#EEEDFE', text: '#3C3489', dot: '#7F77DD' },
]

function CategoryList({ selected, onSelect }) {
  return (
    <div className="category-list">
      {categories.map(cat => (
        <div
          key={cat.id}
          className={`category-band ${selected === cat.id ? 'active' : ''}`}
          style={{ background: cat.color, color: cat.text }}
          onClick={() => onSelect(selected === cat.id ? null : cat.id)}
        >
          <span className="cat-dot" style={{ background: cat.dot }}></span>
          <span className="cat-label">{cat.label}</span>
          <span className="cat-arrow">›</span>
        </div>
      ))}
    </div>
  )
}

export default CategoryList