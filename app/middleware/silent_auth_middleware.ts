import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class SilentAuthMiddleware {
  async handle({ auth }: HttpContext, next: NextFn) {
    if (await auth.use('compagnie').check()) {
      // admin is logged in
      // auth.defaultGuard = 'admin'
    }

    await auth.check()
    await next()
  }
}
