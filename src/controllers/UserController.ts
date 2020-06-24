import { User } from '@models/User'

export class UserController {
  store (): void {
    const user = new User()
    console.log('USER', user)
  }
}
