import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'candidatures'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('candidat_id')
        .unsigned()
        .notNullable()
        .references('candidats.id')
        .onDelete('CASCADE')
      table.integer('poste_id').unsigned().notNullable().references('postes.id').onDelete('CASCADE')

      table.json('cv').nullable()
      table.json('lettre_motivation').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.enu('status', ['PENDING', 'ACCEPTED', 'REJECTED', 'VIEWED']).defaultTo('PENDING')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
