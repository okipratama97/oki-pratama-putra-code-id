const { Router } = require('express')
const router = Router()

const TokenController = require('../controllers/TokenController')

router.get('/', TokenController.createToken)

module.exports = router