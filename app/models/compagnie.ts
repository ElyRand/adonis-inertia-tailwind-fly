import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { withAuthFinder } from '@adonisjs/auth'
import hash from '@adonisjs/core/services/hash'
import { compose } from '@adonisjs/core/helpers'

const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
  uids: ['email'],
  passwordColumnName: 'password',
})

export default class Compagnie extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true, serializeAs: null })
  declare id: number

  @column()
  declare uuid: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @column()
  declare nom: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column()
  declare userId: number

  @column()
  declare email: string
}
