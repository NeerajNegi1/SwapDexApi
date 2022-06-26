const {
  findUserByWalletAddress,
  createUserByWalletAddress,
} = require("../dao/dbQueries/users");

const userLoginSignupService = async (userData) => {
  let user = await findUserByWalletAddress(userData.userWalletAddress);
  if (!user) {
    user = await createUserByWalletAddress(userData);
  }
  return user;
};

module.exports = { userLoginSignupService };
