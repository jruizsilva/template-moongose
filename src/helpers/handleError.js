const httpError = (res, err) => {
  console.log(err)
  res.status(500).json({ error: 'Something went wrong' })
}

module.exports = { httpError }
