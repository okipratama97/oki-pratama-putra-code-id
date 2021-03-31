const { generateToken } = require('../helpers/jwt')

class TokenController {
  static async createToken(req, res) {
    try {
      const access_token = generateToken({})
      res.status(201).json({ access_token })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = TokenController
