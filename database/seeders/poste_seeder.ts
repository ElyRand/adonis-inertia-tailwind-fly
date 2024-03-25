import Poste from '#models/poste'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Poste.fetchOrCreateMany('id', [
      {
        id: 1,
        titre: 'Développeur Fullstack',
        description: 'Développeur Fullstack avec une expérience de 3 ans minimum',
        compagnieId: 1,
        status: 'OPEN',
      },
      {
        id: 2,
        titre: 'Développeur Frontend',
        description: 'Développeur Frontend avec une expérience de 2 ans minimum',
        compagnieId: 2,
        status: 'OPEN',
      },
      {
        id: 3,
        titre: 'Développeur Backend',
        description: 'Développeur Backend avec une expérience de 2 ans minimum',
        compagnieId: 3,
        status: 'OPEN',
      },
    ])
  }
}
