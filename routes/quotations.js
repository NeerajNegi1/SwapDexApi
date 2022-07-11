const {
  getQuotations,
  getChains,
  fetchCryptoPrice,
} = require("../controllers/quotations");

const router = require("express").Router();

router.post("/quotaions", getQuotations);

router.get("/chains", getChains);

router.post("/fetch-crypto-price", fetchCryptoPrice);

module.exports = router;
