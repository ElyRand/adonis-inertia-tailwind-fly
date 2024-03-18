// import type { HttpContext } from '@adonisjs/core/http'

import Compagnie from '#models/compagnie'
import { createCompagnieValidator } from '#validators/compagnie'
import { HttpContext } from '@adonisjs/core/http'

export default class CompagniesController {
  async index(ctx: HttpContext) {
    const compagnies = await Compagnie.all()
    return ctx.view.render('compagnies/index', { compagnies })
  }

  async show(ctx: HttpContext) {
    const compagnie = await Compagnie.findBy('uuid', ctx.params.uuid)
    return ctx.view.render('compagnies/show', { compagnie })
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createCompagnieValidator)
    try {
      await Compagnie.create(payload)
      response.redirect().toRoute('compagnies.index')
    } catch (e) {
      console.log(e)
      throw new Error(e)
    }
  }
}
