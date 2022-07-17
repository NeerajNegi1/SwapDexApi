const {
  getQuotations,
  getChains,
  fetchCryptoPrice,
  createQuotations,
  fetchQuotationStatus,
} = require("../controllers/quotations");

const router = require("express").Router();

router.post("/quotaions", getQuotations);

router.get("/chains", getChains);

router.post("/fetch-crypto-price", fetchCryptoPrice);

router.post("/create-quotations", createQuotations);

router.get("/quotation-status/:id", fetchQuotationStatus);

module.exports = router;
