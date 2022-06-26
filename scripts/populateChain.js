const mongoose = require("mongoose");
const axios = require("axios");
const ChainModel = require("../model/ChainModel");
const getConfig = require("../utils/config");

const populateChains = async () => {
  await mongoose.connect(await getConfig("dbUrl"));
  const response = await axios.get(`https://chainid.network/chains.json`);
  const chains = response.data;

  let dbResponse = await ChainModel.insertMany(chains);
  console.log(dbResponse);
};

// populateChains();

const enableChains = async () => {
  await mongoose.connect(await getConfig("dbUrl"));
  let dbResponse = await ChainModel.updateMany(
    {
      _id: {
        $in: [
          "62b718f8c94242d9d6b1da44",
          "62b718f8c94242d9d6b1d7fb",
          "62b718f8c94242d9d6b1d87e",
          "62b718f8c94242d9d6b1da12",
        ],
      },
    },
    { $set: { isEnabled: true } }
  );
  console.log(dbResponse);
};

enableChains();
