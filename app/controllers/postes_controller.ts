import Poste from '#models/poste'
import { createPostValidator } from '#validators/poste'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostesController {
  async index({ view, auth }: HttpContext) {
    await auth.check()
    const postes = await Poste.all()
    return view.render('postes/show', { postes })
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)
    return await Poste.create(payload)
  }
}
