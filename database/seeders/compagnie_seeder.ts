import Compagnie from '#models/compagnie'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const compagnies = await Compagnie.createMany([
      {
        nom: 'Google',
      },
      {
        nom: 'Adonis',
      },
      {
        nom: 'ILOC',
      },
    ])

    const promises = compagnies.map(async (compagnie) => {
      const user = await User.findOrFail(1)
      return user.related('compagnies').save(compagnie)
    })

    await Promise.all(promises)
  }
}
