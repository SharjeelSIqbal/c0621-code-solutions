const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  /* your code here */
  const accessToken = 'x-access-token';
  if (!req.headers[accessToken]) {
    throw new ClientError(401, 'authentication required');
  }
  const token = req.headers[accessToken];
  try {
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }

}

module.exports = authorizationMiddleware;
