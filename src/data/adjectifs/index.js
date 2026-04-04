import sensoriels from './sensoriels'
import emotions from './emotions'
import caractere from './caractere'
import intellect from './intellect'
import temps from './temps'
import nature from './nature'
import divers from './divers'

const adjectifs = [
  ...Object.values(sensoriels).flat(),
  ...Object.values(emotions).flat(),
  ...Object.values(caractere).flat(),
  ...Object.values(intellect).flat(),
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

export default adjectifs