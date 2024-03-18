import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const createPostValidator = vine.compile(
  vine.object({
    titre: vine.string().trim().minLength(6),
    description: vine.string().trim().escape(),
    compagnie: vine.string().trim(),
  })
)
