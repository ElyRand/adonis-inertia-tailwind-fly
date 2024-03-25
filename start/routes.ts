/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PostesController = () => import('#controllers/postes_controller')
const CompagniesController = () => import('#controllers/compagnies_controller')
const SigninController = () => import('#controllers/signin_controller')
const SignupController = () => import('#controllers/signup_controller')
import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { MigrationRunner } from '@adonisjs/lucid/migration'
import db from '@adonisjs/lucid/services/db'

router.get('/', async ({ response }) => {
  response.redirect().toRoute('compagnies.index')
})

router.get('/postes', [PostesController, 'index'])

router.get('/compagnies', [CompagniesController, 'index']).as('compagnies.index')
router.on('/compagnies/create').render('compagnies/create').as('compagnies.store')
router
  .get('/compagnies/:uuid', [CompagniesController, 'show'])
  .as('compagnies.show')
  .where('uuid', router.matchers.uuid())
router.post('/compagnies', [CompagniesController, 'store'])

router.get('test', async () => {
  const migrator = new MigrationRunner(db, app, {
    direction: 'up',
    dryRun: false,
  })

  await migrator.run()
  return migrator.migratedFiles
})

router
  .group(() => {
    router
      .get('login', ({ view, request }: HttpContext) => {
        const referrer = request.header('referrer')
        return view.render('auth/signin', { actionRoute: '/auth/login', referrer })
      })
      .as('auth.signin')
    router.on('register').render('auth/signup', { actionRoute: '/auth/register' }).as('auth.signup')
    router.post('login', [SigninController, 'login'])
    router.post('register', [SignupController, 'register'])
  })
  .prefix('auth')

router
  .group(() => {
    router.get('login', [SigninController, 'loginCompany'])
    router.get('register', [SignupController, 'registerCompany'])
  })
  .prefix('compagnies')
