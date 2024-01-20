const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/Product");


const app = express();
const port = 3000;
dotenv.config();
const cors = require('cors')
const corsOption = {
    origin: ['http://10.0.2.2:3000/'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });  
  app.use(express.json({limit:"10mb"}));
  app.use(express.urlencoded({limit:"10mb",extended:true}))


app.use("/api/products",productRouter)



app.get("/", (req, res) => res.send("Hello World!"));
app.listen(process.env.PORT||port, () => console.log(`Example app listening on port ${process.env.PORT}!`));
