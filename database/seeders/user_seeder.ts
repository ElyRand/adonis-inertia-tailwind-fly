import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.fetchOrCreateMany('email', [
      {
        email: 'elah@bili.com',
        password: 'secret',
      },
      {
        email: 'hasina@bili.com',
        password: 'supersecret',
      },
    ])
  }
}
