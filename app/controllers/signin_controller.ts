import Compagnie from '#models/compagnie'
import User from '#models/user'
import { createAuthValidator } from '#validators/auth'
import { type HttpContext } from '@adonisjs/core/http'

export default class SigninController {
  async login({ request, response, auth }: HttpContext) {
    const { email, password, forward } = await request.validateUsing(createAuthValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('user').login(user)

    return forward ? response.redirect(forward) : response.redirect('/')
  }

  async loginCompany({ request, response, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const compagnie = await Compagnie.verifyCredentials(email, password)

    await auth.use('compagnie').login(compagnie)
    return response.redirect('/')
  }

  async logout({ response, auth }: HttpContext) {
    console.log('logout', auth.defaultGuard)
    await auth.use(auth.defaultGuard).logout()
    return response.redirect().toRoute('postes.index')
  }
}
