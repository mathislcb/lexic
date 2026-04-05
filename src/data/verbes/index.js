import sensoriels from './sensoriels'
import emotions from './emotions'
import caractere from './caractere'
import intellect from './intellect'
import mouvement from './mouvement'
import divers from './divers'
import richification_mots from './richification_mots'

const verbes = [
  ...Object.values(sensoriels).flat(),
  ...Object.values(emotions).flat(),
  ...caractere,
  ...intellect,
  ...mouvement,
  ...divers,
  ...richification_mots,
]

export const parCategorie = {
  sensoriels,
  emotions,
  caractere,
  intellect,
  mouvement,
}

export default verbes