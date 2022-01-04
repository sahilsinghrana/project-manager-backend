const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    req.user = verified.user;
  } catch (err) {
    res.status(401);
  }
  next();
};

module.exports = verifyToken;
