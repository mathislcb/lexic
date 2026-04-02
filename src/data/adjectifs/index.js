import sensoriels from './sensoriels'
import emotions from './emotions'
import caractere from './caractere'
import intellect from './intellect'
import temps from './temps'
import nature from './nature'

const adjectifs = [
  ...Object.values(sensoriels).flat(),
  ...emotions,
  ...caractere,
  ...intellect,
  ...temps,
  ...nature,
]

export const parCategorie = {
  sensoriels,
  emotions,
  caractere,
  intellect,
  temps,
  nature,
}

export default adjectifs