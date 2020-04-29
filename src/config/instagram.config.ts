import * as dotenv from 'dotenv'

dotenv.config()

export default {
  username: process.env.INSTAGRAM_USERNAME || '',
  password: process.env.INSTAGRAM_PASSWORD || ''
}
