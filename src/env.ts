import { coerce, Infer, integer, mask, object, string } from 'superstruct'

/**
 * Type-safe environment variable parsing.
 * This is just an example using superstruct.
 * Most people probably just read env vars from `process.env` directly instead of doing something like this.
 */
const AppEnvironment = object({
  DB_URL: string(),
  PORT: coerce(integer(), string(), value => parseInt(value, 10)),
})

export type AppEnv = Infer<typeof AppEnvironment>

// These methods are "async" in order to lift
// exceptions into `Promise`.
export async function getAppEnv(): Promise<AppEnv> {
  const data: unknown = process.env
  const env = mask(data, AppEnvironment)
  return env
}
