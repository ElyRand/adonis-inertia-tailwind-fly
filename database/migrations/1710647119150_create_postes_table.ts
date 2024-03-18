import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'postes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('compagnie_id').unsigned().references('compagnies.id').onDelete('CASCADE')

      table.uuid('uuid').notNullable().unique().defaultTo(this.db.knexRawQuery('gen_random_uuid()'))

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('titre', 100).notNullable()
      table.string('description', 1000).notNullable()

      table.enu('status', ['OPEN', 'CLOSED', 'DRAFT', 'ARCHIVED']).defaultTo('DRAFT')
    })
  }

  async down() {
    this.schema.raw('DROP TYPE IF EXISTS "status"')
    this.schema.dropTable(this.tableName)
  }
}
