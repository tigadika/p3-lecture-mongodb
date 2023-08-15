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
let db;

function getDb() {
  return db
}

async function connect() {
  try {
    await client.connect()

    console.log('connect berhasil');

    db = await client.db(dbName)

    return db
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connect, getDb }