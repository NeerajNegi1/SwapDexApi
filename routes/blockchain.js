const { verifyTransaction } = require("../controllers/blockchain");

const router = require("express").Router();

router.post("/verify-transaction", verifyTransaction);

module.exports = router;
