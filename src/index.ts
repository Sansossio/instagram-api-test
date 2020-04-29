import instagramConfig from './config/instagram.config'
import { InstagramService } from './services/instagram/instagram.service'
import * as fs from 'fs'
import { join } from 'path'

const filePath = join(__dirname, '..', 'images', 'logo.jpg')

async function main () {
  const { username, password } = instagramConfig
  const client = new InstagramService(username, password)
  const file = fs.readFileSync(filePath)
  console.log(await client.uploadPhoto(file, 'Upload by api'))
}

main()
  .finally(() => process.exit())
