import Compagnie from '#models/compagnie'
import User from '#models/user'
import { createAuthValidator } from '#validators/auth'
import { HttpContext } from '@adonisjs/core/http'

export default class SignupController {
  async register({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(createAuthValidator)
    const user = await User.create(payload)

    await auth.use('user').login(user)
    await response.redirect('/')
  }

  async registerCompany({ request, response, auth }: HttpContext) {
    const payload = await request.validateUsing(createAuthValidator)
    const compagnie = await Compagnie.create(payload)

    await auth.use('compagnie').login(compagnie)
    await response.redirect('/')
  }
}
