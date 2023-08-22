const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const bookRoutes = require('./Routes/book')
const app = express();

app.use(bodyParser.json());

app.use('/book',bookRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on the port ${process.env.PORT }`);
});
