const { httpError } = require('../helpers/handleError')
const UserModel = require('../models/users')

const getItems = async (req, res) => {
  try {
    const resDetails = await UserModel.find()
    res.json({ data: resDetails })
  } catch (err) {
    httpError(res, err)
  }
}
const getItem = (req, res) => {}
const createItem = async (req, res) => {
  try {
    const { name, age, email } = req.body
    const resDetails = await UserModel.create({ name, age, email })
    res.json({ data: resDetails })
  } catch (err) {
    httpError(res, err)
  }
}
const updateItem = (req, res) => {}
const deleteItem = (req, res) => {}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }
