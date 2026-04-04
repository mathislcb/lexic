import intensite from './intensite'
import temps from './temps'
import maniere from './maniere'
import divers from './divers'

const adverbes = [
  ...intensite,
  ...temps,
  ...maniere,
  ...divers,
]

export const parCategorie = {
  intensite,
  temps,
  maniere,
}

export default adverbes