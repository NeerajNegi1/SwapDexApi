const { userLoginSignupService } = require("../services/users");
const logger = require("../utils/logger");

const userLoginSignup = async (req, res) => {
  try {
    const user = await userLoginSignupService(req.body);
    logger.info({ description: "User logged in successfully", data: user });
    return res.status(200).json({
      status: true,
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    logger.error({ description: "Error in userLoginSignup", error });
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { userLoginSignup };
