import vine from '@vinejs/vine'

export const createCompagnieValidator = vine.compile(
  vine.object({
    nom: vine.string().trim().minLength(3),
  })
)
