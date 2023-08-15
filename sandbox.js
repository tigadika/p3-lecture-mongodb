const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017'

const client = new MongoClient(uri, {
  ServerApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

const dbName = 'hck-58'

async function connect() {
  try {
    await client.connect()

    console.log('connect berhasil');

    const db = client.db(dbName)

    return db
  } finally {
    await client.close()
  }
}

module.exports = connect