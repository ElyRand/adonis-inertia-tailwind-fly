import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Compagnie from './compagnie.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Poste extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare titre: string

  @column()
  declare description: string

  @belongsTo(() => Compagnie)
  declare compagnie: BelongsTo<typeof Compagnie>

  @column()
  declare status: 'OPEN' | 'CLOSED' | 'DRAFT' | 'ARCHIVED'
}
