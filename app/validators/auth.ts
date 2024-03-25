import vine from '@vinejs/vine'

export const createAuthValidator = vine.compile(
  vine.object({
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(8),
    forward: vine.string().trim().optional(),
  })
)
