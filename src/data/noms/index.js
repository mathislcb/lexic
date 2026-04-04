import sensoriels from './sensoriels'
import emotions from './emotions'
import caractere from './caractere'
import intellect from './intellect'
import temps from './temps'
import nature from './nature'
import divers from './divers'

const noms = [
  ...Object.values(sensoriels).flat(),
  ...Object.values(emotions).flat(),
  ...caractere,
  ...intellect,
  ...temps,
  ...Object.values(nature).flat(),
  ...divers,
]

export const parCategorie = {
  sensoriels,
  emotions,
  caractere,
  intellect,
  temps,
  nature,
}

export default noms