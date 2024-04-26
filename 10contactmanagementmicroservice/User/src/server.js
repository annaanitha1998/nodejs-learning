const express = require("express");
const {connectDb} = require("./database");
const {errorHandler} = require("./utils/middleware");
const { PORT } = require("./config") 
const userRoute = require("./routes/user")

const initializeServer = async() => {
  await connectDb();
  const app = express();
  
  app.use(express.json());
  app.use(userRoute);
  app.use(errorHandler);
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

initializeServer();
