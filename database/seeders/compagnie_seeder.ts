import Compagnie from '#models/compagnie'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // await Compagnie.createMany([
    //   {
    //     nom: 'Google',
    //   },
    //   {
    //     nom: 'Adonis',
    //   },
    //   {
    //     nom: 'ILOC',
    //   },
    // ])
    await Compagnie.create({
      nom: 'Google',
    })
  }
}
