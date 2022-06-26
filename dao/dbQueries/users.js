const UserModel = require("../../model/UserModel");
const {
  updateUserByWalletAddressCache,
  findUserByWalletAddressCache,
} = require("../caching/user");

const findUserByWalletAddress = async (userWalletAddress) => {
  try {
    let user = await findUserByWalletAddressCache(userWalletAddress);
    if (user) {
      return user;
    }
    user = await UserModel.findOne({ userWalletAddress });
    if (user) {
      await updateUserByWalletAddressCache(userWalletAddress, user);
    }
    return user;
  } catch (error) {
    return error;
  }
};

const createUserByWalletAddress = async (userData) => {
  try {
    user = await UserModel.create(userData);
    await updateUserByWalletAddressCache(user.userWalletAddress, user);
    return user;
  } catch (error) {
    return error;
  }
};

module.exports = { findUserByWalletAddress, createUserByWalletAddress };
