import { IgApiClient, AccountRepositoryLoginResponseLogged_in_user } from 'instagram-private-api';


export class InstagramService {
  private ig = new IgApiClient()
  private client: AccountRepositoryLoginResponseLogged_in_user

  constructor (
    private readonly username: string,
    private readonly password: string
  ) {
    this.ig.state.generateDevice(this.username)
  }

  private async login () {
    if (this.client) {
      return
    }
    try {
      this.client = await this.ig.account.login(this.username, this.password)
    } catch (e) {
      throw new Error(e.message)
    }
  }

  async getProfile () {
    await this.login()
    return this.client
  }

  async uploadPhoto (file: Buffer, caption?: string) {
    await this.login()
    return this.ig.publish.photo({
      file,
      caption
    })
  }
}