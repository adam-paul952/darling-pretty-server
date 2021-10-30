const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Darling Pretty's Server</h1>");
});

require("./app/routes/darlingPretty.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
