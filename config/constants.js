const JWT_SECRET = process.env.JWT_SECRET
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI
const REDIS_URL = process.env.REDIS_URL || ''

module.exports = {
  JWT_SECRET,
  PORT,
  MONGODB_URI,
  REDIS_URL,
}
