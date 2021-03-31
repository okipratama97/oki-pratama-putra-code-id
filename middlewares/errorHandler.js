module.exports = (err, req, res, next) => {
  console.log(err, '<<<<<<<:ERROR MASUK')
  console.log(err.name, '<<<<<<:ERROR NAME')
  console.log(err.message, '<<<<<<<:ERROR MSG')
  let statusCode = 500
  let errorCode = 'Internal server error'
  let message = 'Unexpected error.'

  switch (err.name) {
    case 'error_404_user_not_found':
      statusCode = 404
      errorCode = 'Not Found'
      message = 'Requested user was not found'
      break

    case 'error_401_invalid_token':
      statusCode = 401
      errorCode = 'Unauthorized'
      message = 'Please provide a valid access token'
      break

    case 'error_400_body_invalid':
      statusCode = 400
      errorCode = 'Validation error'
      message = 'Input invalid'
      break

    case 'MongoError':
      statusCode = 400
      errorCode = 'Validation error'
      message = 'Input invalid'
      break

    default:
      break
  }

  res.status(statusCode).json({ errorCode, message })
}
