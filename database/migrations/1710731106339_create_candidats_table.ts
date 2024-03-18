import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'candidats'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')

      table.uuid('uuid').notNullable().unique().defaultTo(this.db.knexRawQuery('gen_random_uuid()'))
      table.index(['uuid'], 'candidats_uuid_index')

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.string('bio', 1000).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
