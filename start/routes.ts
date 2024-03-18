/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const PostesController = () => import('#controllers/postes_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('welcome')

router.get('/postes', [PostesController, 'index'])
router.post('/postes', [PostesController, 'store'])
