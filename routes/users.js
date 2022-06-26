const { userLoginSignup } = require("../controllers/users");

const router = require("express").Router();

router.post("/user-login-signup", userLoginSignup);

module.exports = router;
