const User = require('../models/User')

class UserController {
  static async createUser(req, res, next) {
    try {
      const { userName, accountNumber, emailAddress, identityNumber } = req.body

      if (!userName || !accountNumber || !emailAddress || !identityNumber) {
        throw { name: 'error_400_body_invalid' }
      }

      const user = await User.createUser({
        userName,
        accountNumber,
        emailAddress,
        identityNumber,
      })

      res.status(201).json({ user: user.ops[0] })
    } catch (err) {
      next(err)
    }
  }

  static async findUserByAccountNumber(req, res, next) {
    try {
      const user = await User.findUserByAccountNumber(req.params.accountNumber)

      if (!user) throw { name: 'error_404_user_not_found' }

      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  }

  static async findUserByIdentityNumber(req, res, next) {
    try {
      const user = await User.findUserByIdentityNumber(
        req.params.identityNumber
      )

      if (!user) throw { name: 'error_404_user_not_found' }

      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  }

  static async editUserById(req, res, next) {
    try {
      const { userName, accountNumber, emailAddress, identityNumber } = req.body
      const { _id } = req.params

      if (
        !userName ||
        !accountNumber ||
        !emailAddress ||
        !identityNumber ||
        !_id
      ) {
        throw { name: 'error_400_body_invalid' }
      }

      const user = await User.findUserById(_id)
      if (!user) throw { name: 'error_404_user_not_found' }

      const response = await User.editUserById({
        userName,
        accountNumber,
        emailAddress,
        identityNumber,
        _id,
      })

      res.status(200).json({ user: response.value })
    } catch (err) {
      next(err)
    }
  }

  static async deleteUserById(req, res, next) {
    try {
      const { _id } = req.params

      const { deletedCount: response } = await User.deleteUserById(_id)
      if (!response) throw { name: 'error_404_user_not_found' }

      res.status(200).json({ message: 'User successfully deleted' })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
