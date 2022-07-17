const axios = require("axios");
const getConfig = require("../utils/config");
const logger = require("../utils/logger");

const verifyTransaction = async (req, res) => {
  try {
    const swapDexBlockchain = await getConfig("swapDexBlockchain");
    const { data } = await axios.post(
      `${swapDexBlockchain}/verify-order`,
      req.body
    );
    logger.info({
      description: "Quotation created successfully",
      data: data,
    });
    return res.status(200).json({
      ...data,
    });
  } catch (error) {
    logger.error({ description: "Error in createQuotations", error });
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { verifyTransaction };
