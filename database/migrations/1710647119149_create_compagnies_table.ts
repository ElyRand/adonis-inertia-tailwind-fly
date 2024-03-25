import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'compagnies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.uuid('uuid').notNullable().unique().defaultTo(this.db.knexRawQuery('gen_random_uuid()'))

      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('nom', 100).notNullable()

      table.index(['uuid'], 'compagnies_uuid_index')
      table.index(['nom'], 'compagnies_nom_index')

      table.string('email', 100).notNullable().unique()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
