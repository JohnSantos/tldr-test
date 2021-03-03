var express = require("express");
var router = express.Router();
const { validateEmail } = require("../middleware/validations");

const UnsubscribeController = (req, res) => {
  console.log("Validated email address", req.body.email);
  return res.status(200).json({
    message: `User with email ${req.body.email} unsubscribed with success.`,
  });
};

/* GET home page. */
router.get("/", function (req, res, next) {
  res.redirect("http://localhost:3000/goodbye?email=test@test.com");
});

router.get("/goodbye", function (req, res, next) {
  res.render("index", { email: req.query.email });
});

router.post("/goodbye", validateEmail, UnsubscribeController);

module.exports = router;
