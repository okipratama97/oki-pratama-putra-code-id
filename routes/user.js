const { Router } = require('express')
const router = Router()
const authorized = require('../middlewares/authorized')

const UserController = require('../controllers/UserController')

router.use(authorized)

router.post('/', UserController.createUser)

router.get(
  '/accountNumber/:accountNumber',
  UserController.findUserByAccountNumber
)

router.get(
  '/identityNumber/:identityNumber',
  UserController.findUserByIdentityNumber
)

router.put('/:_id', UserController.editUserById)

router.delete('/:_id', UserController.deleteUserById)

module.exports = router
