
const tokenService = require('../services/token-service');


 const auth =  async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({msg:"No Auth token access denoed"});
  } 

  const verified = tokenService.verifyAccessToken(token);
  if (!verified) {
    return res.status(401).json({msg:"Token Verification failed ,authorization denied."});
  }
 
  req.token = token;

    // Call the next middleware
    next();
}

module.exports = auth;