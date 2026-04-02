import sharp from 'sharp'
import { readFileSync } from 'fs'

const svg = readFileSync('./public/icons/icon.svg')

await sharp(svg)
  .resize(180, 180)
  .png()
  .toFile('./public/icons/apple-touch-icon.png')

console.log('Icône générée !')