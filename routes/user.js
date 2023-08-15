const express = require('express')
const Controller = require('../controllers/user')
const router = express.Router()

router.get('/', Controller.findAll)
router.get('/:id', Controller.findOne)

module.exports = router