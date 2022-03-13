import * as http from 'http'
import { connectToPg } from "./db"
import { getAppEnv } from "./env"

// Start service.
// On-error, log error and shut-down.
start()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })

export async function start() {
  const env = await getAppEnv()
  const pg = await connectToPg(env.DB_URL)

  async function getTimeFromDB(): Promise<string> {
    return pg
      .query('SELECT NOW()')
      // This is not really type-safe.
      // We could use `superstruct` to enforce type-safety here, but this is good enough.
      // This will just be "any", but it represents the `now()` timestamp.
      .then(result => result.rows[0].now)
  }

  // Minimal HTTP server that responds to the "/time" get endpoint
  const server = http.createServer(async (req, res) => {
    if (req.url === '/time' && req.method === 'GET') {

      const time = await getTimeFromDB()
      const body = JSON.stringify({ time })

      res
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(body)

    } else {
      res.writeHead(404).end("404, Not Found")
    }
  })

  // Listens on the port that was passed in.
  server.listen(env.PORT, () => {
    console.log(`Server listening on port ${env.PORT}`)
  })
}

