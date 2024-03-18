import Poste from '#models/poste'
import { createPostValidator } from '#validators/poste'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostesController {
  async index({}: HttpContext) {
    return await Poste.all()
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)
    return await Poste.create(payload)
  }
}
