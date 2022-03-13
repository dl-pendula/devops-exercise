import { Pool } from 'pg'

export async function connectToPg(dbURL: string) {
  const pool = new Pool({
    connectionString: dbURL,
    max: 1,
    min: 1
  })

  // Ensure that a connection can be established
  // and queries are successful
  await pool.query('select 1')
  console.info(`Connected to database`)
  return pool
}

export type DBValue = (string | boolean | Date | Object | undefined | null)

export class DBClient {
  constructor(private client: Pool) { }

  // Passing name turns it into a prepared statement.
  // Might offer query parsing optimizations in certain cases.
  query<T>(text: string, values: DBValue[] = [], name?: string): Promise<T[]> {

    const queryP = this.client.query<T>({
      name,
      text,
      values
    })

    if (process.env['QUERY_DEBUG']) {
      queryP.then(console.info)
    }

    return queryP.then(res => res.rows)
  }
}
