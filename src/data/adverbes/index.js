import intensite from './intensite'
import temps from './temps'
import maniere from './maniere'

const adverbes = [
  ...intensite,
  ...temps,
  ...maniere,
]

export const parCategorie = {
  intensite,
  temps,
  maniere,
}

export default adverbes