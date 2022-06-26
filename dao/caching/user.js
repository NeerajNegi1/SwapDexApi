const { Level } = require("level");
const usersLevelDB = new Level("users-cache", {
  valueEncoding: "json",
});

const findUserByWalletAddressCache = async (cryptoId) => {
  try {
    return await usersLevelDB.get(cryptoId);
  } catch (error) {
    return false;
  }
};

const updateUserByWalletAddressCache = async (id, data) => {
  return await usersLevelDB.put(id, data);
};

module.exports = {
  findUserByWalletAddressCache,
  updateUserByWalletAddressCache,
};
