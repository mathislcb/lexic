import sensoriels from './sensoriels'
import emotions from './emotions'
import caractere from './caractere'
import intellect from './intellect'
import mouvement from './mouvement'

const verbes = [
  ...Object.values(sensoriels).flat(),
  ...emotions,
  ...caractere,
  ...intellect,
  ...mouvement,
]

export const parCategorie = {
  sensoriels,
  emotions,
  caractere,
  intellect,
  mouvement,
}

export default verbes