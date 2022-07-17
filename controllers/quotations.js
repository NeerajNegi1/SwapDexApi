const axios = require("axios");
const getConfig = require("../utils/config");
const logger = require("../utils/logger");

const getQuotations = async (req, res) => {
  try {
    const swapDexQuotations = await getConfig("swapDexQuotations");
    const { data } = await axios.post(
      `${swapDexQuotations}/fetch-quotations`,
      req.body
    );
    logger.info({
      description: "Quotations data fetched successfully",
      data: data.data,
    });
    return res.status(200).json({
      success: true,
      message: "Quotations data fetched successfully",
      data: data.data,
    });
  } catch (error) {
    logger.error({ description: "Error in getQuotations", error });
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getChains = async (req, res) => {
  try {
    const swapDexQuotations = await getConfig("swapDexQuotations");
    const { data } = await axios.get(`${swapDexQuotations}/fetch-all-chains`);
    logger.info({
      description: "Chains data fetched successfully",
      data: data.data,
    });
    return res.status(200).json({
      success: true,
      message: "Chains data fetched successfully",
      data: data.data,
    });
  } catch (error) {
    logger.error({ description: "Error in getChains", error });
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const fetchCryptoPrice = async (req, res) => {
  try {
    const swapDexQuotations = await getConfig("swapDexQuotations");
    const { data } = await axios.post(
      `${swapDexQuotations}/fetch-token-price`,
      req.body
    );
    logger.info({
      description: "Token prices fetched successfully",
      data: data.data,
    });
    return res.status(200).json({
      success: true,
      message: "Token prices fetched successfully",
      data: data.data,
    });
  } catch (error) {
    logger.error({ description: "Error in fetchCryptoPrice", error });
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createQuotations = async (req, res) => {
  try {
    const swapDexQuotations = await getConfig("swapDexQuotations");
    const { data } = await axios.post(
      `${swapDexQuotations}/create-quotations`,
      req.body
    );
    console.log(data);
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

const fetchQuotationStatus = async (req, res) => {
  try {
    const swapDexQuotations = await getConfig("swapDexQuotations");
    const { data } = await axios.get(
      `${swapDexQuotations}/quotation-status/${req.params.id}`
    );
    logger.info({
      description:
        "fetchQuotationStatus - Quotation status fetched successfully",
      data: data,
    });
    return res.status(200).json({
      ...data,
    });
  } catch (error) {
    logger.error({ description: "Error in fetchQuotationStatus", error });
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getQuotations,
  getChains,
  fetchCryptoPrice,
  createQuotations,
  fetchQuotationStatus,
};
