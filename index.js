const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const sequelize = require("./Utils/db");  // importing database configuration
const bookRoutes = require("./Routes/book");
const app = express();

app.use(bodyParser.json());

app.use("/book", bookRoutes);

sequelize.sync().then(() => {
  console.log("Database Synced");

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on the port ${process.env.PORT}`);
  });
});
