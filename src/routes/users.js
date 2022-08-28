const express = require('express')
const router = express.Router()
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/users')
const checkOrigin = require('../middlewares/origin')

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', checkOrigin, createItem)
router.patch('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router
