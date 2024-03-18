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
import app from '@adonisjs/core/services/app'
import router from '@adonisjs/core/services/router'
import { MigrationRunner } from '@adonisjs/lucid/migration'
import db from '@adonisjs/lucid/services/db'

router.on('/').render('welcome')

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
