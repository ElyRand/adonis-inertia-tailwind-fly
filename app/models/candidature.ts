import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Candidat from './candidat.js'
import Poste from './poste.js'

export default class Candidature extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Candidat)
  declare candidat: BelongsTo<typeof Candidat>

  @belongsTo(() => Poste)
  declare poste: BelongsTo<typeof Poste>

  @column()
  declare cv: object | null

  @column()
  declare lettreMotivation: object | null

  @column()
  declare status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'VIEWED'
}
