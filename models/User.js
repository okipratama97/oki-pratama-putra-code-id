const { ObjectId } = require('mongodb')
const { getDatabase } = require('../config/mongodb')

class User {
  static createUser(payload) {
    return getDatabase().collection('users').insertOne(payload)
  }

  static findUserById(_id) {
    return getDatabase()
      .collection('users')
      .findOne({ _id: ObjectId(_id) })
  }

  static findUserByIdentityNumber(identityNumber) {
    return getDatabase().collection('users').findOne({ identityNumber })
  }

  static findUserByAccountNumber(accountNumber) {
    return getDatabase().collection('users').findOne({ accountNumber })
  }

  static editUserById(payload) {
    const filter = { _id: ObjectId(payload._id) }
    const updateDoc = {
      $set: {
        userName: payload.userName,
        accountNumber: payload.accountNumber,
        emailAddress: payload.emailAddress,
        identityNumber: payload.identityNumber,
      },
    }
    return getDatabase()
      .collection('users')
      .findOneAndUpdate(filter, updateDoc, { returnOriginal: false })
  }

  static deleteUserById(_id) {
    return getDatabase()
      .collection('users')
      .deleteOne({ _id: ObjectId(_id) })
  }
}

module.exports = User
