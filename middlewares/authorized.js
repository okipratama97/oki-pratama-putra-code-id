const { verifyToken } = require('../helpers/jwt.js')

const authorized = (req, res, next) => {
  try {
    const { access_token } = req.headers

    const decoded = verifyToken(access_token)
    if (!decoded) throw { name: 'error_401_invalid_token' }

    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authorized
