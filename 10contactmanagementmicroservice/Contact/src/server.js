const express = require("express");
const {connectDb} = require("./database");
const {errorHandler} = require("./utils/middleware");
const {PORT} = require("./config")
const contactRoute = require("./routes/contact")

connectDb();
const app = express();


app.use(express.json());
app.use(contactRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});``