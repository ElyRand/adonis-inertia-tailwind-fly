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
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.get('/', async ({ response }) => {
  response.redirect().toRoute('compagnies.index')
})

router.get('/postes', [PostesController, 'index']).as('postes.index')

router.get('/compagnies', [CompagniesController, 'index']).as('compagnies.index')
router.on('/compagnies/create').render('compagnies/create').as('compagnies.store')
router
  .get('/compagnies/:uuid', [CompagniesController, 'show'])
  .as('compagnies.show')
  .where('uuid', router.matchers.uuid())
router.post('/compagnies', [CompagniesController, 'store'])

router.get('logout', [SigninController, 'logout']).use(middleware.auth())

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
    router
      .on('register')
      .render('auth/compagnie/signup', { actionRoute: '/compagnies/auth/register' })
      .as('auth.compagnies.signup')
    router.post('login', [SigninController, 'loginCompany'])
    router.post('register', [SignupController, 'registerCompany'])
  })
  .prefix('compagnies')

router.on('/inertia').renderInertia('home', { version: 6 })
