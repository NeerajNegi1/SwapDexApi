const express = require("express");
const initialize = require("./initApp");
const app = express();

app.use(express.json());

// payload validation (joi) and the encryption and decryption of the payload using middleware
// have to add oauth authenticaton layer

(async () => {
  // initializing the app
  await initialize(app);
})();
