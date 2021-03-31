const { MongoClient } = require('mongodb')

const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri, { useUnifiedTopology: true })
let database = null

async function connect() {
  try {
    await client.connect()
    const db = client.db('oki_pratama_putra')
    database = db

    db.collection('users').createIndex(
      {
        userName: 1,
      },
      { unique: true }
    )

    db.collection('users').createIndex(
      {
        accountNumber: 1,
      },
      { unique: true }
    )

    db.collection('users').createIndex(
      {
        emailAddress: 1,
      },
      { unique: true }
    )

    db.collection('users').createIndex(
      {
        identityNumber: 1,
      },
      { unique: true }
    )

    return database
  } catch (err) {
    console.log(err)
  }
}

function getDatabase() {
  return database
}

module.exports = {
  connect,
  getDatabase,
}
