const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`
console.log(pathRouter)

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file)
  const skip = ['index'].includes(fileWithOutExt)
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
  }
  return removeExtension(file)
})

router.get('*', (req, res) => {
  res.status(404).json({ error: 'Not found' })
})

module.exports = router
