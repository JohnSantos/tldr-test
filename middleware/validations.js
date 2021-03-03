const validator = require("email-validator");

const validateEmail = (req, res, next) => {
  const email = req.body.email;
  console.log("email", email);
  if (email && validator.validate(req.body.email)) {
    next();
  } else {
    return res.status(400).json({
      message: "Invalid email address.",
    });
  }
};

module.exports = { validateEmail };
