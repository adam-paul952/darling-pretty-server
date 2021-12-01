const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const env = require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const clientOrigin = process.env.CLIENT_ORIGIN_URL;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Darling Pretty's Server</h1>");
});

require("./app/routes/clientInfo.routes")(app);
require("./app/routes/contactForm.routes")(app);
require("./app/routes/sessionInfo.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
