const User = require('../models/User')
const Redis = require('ioredis')
const redis = new Redis()

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

      await redis.set(
        `users:accountNumber:${user.ops[0].accountNumber}`,
        JSON.stringify(user.ops[0])
      )

      await redis.set(
        `users:identityNumber:${user.ops[0].identityNumber}`,
        JSON.stringify(user.ops[0])
      )

      res.status(201).json({ user: user.ops[0] })
    } catch (err) {
      next(err)
    }
  }

  static async findUserByAccountNumber(req, res, next) {
    try {
      let user = await redis.get(
        `users:accountNumber:${req.params.accountNumber}`
      )
      if (!user) {
        user = await User.findUserByAccountNumber(req.params.accountNumber)
        if (!user) throw { name: 'error_404_user_not_found' }

        await redis.set(
          `users:accountNumber:${req.params.accountNumber}`,
          JSON.stringify(user)
        )
      } else {
        user = JSON.parse(user)
      }

      res.status(200).json(user)
    } catch (err) {
      next(err)
    }
  }

  static async findUserByIdentityNumber(req, res, next) {
    try {
      let user = await redis.get(
        `users:identityNumber:${req.params.identityNumber}`
      )

      if (!user) {
        user = await User.findUserByIdentityNumber(req.params.identityNumber)
        if (!user) throw { name: 'error_404_user_not_found' }

        await redis.set(
          `users:identityNumber:${req.params.identityNumber}`,
          JSON.stringify(user)
        )
      } else {
        user = JSON.parse(user)
      }

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

      await redis.flushdb()
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

      await redis.flushdb()
      res.status(200).json({ message: 'User successfully deleted' })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController
