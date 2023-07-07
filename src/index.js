const express = require("express");
const bodyParser = require("body-parser");

const deleveryRoute = require("./routes/deleveryDetailRoute")
const { connectMongodb } = require("./config/db")
const dotenv = require("dotenv")
dotenv.config();
const app = express();
const PORT = process.env.PORT


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api", deleveryRoute)
//connection 
connectMongodb("mongodb+srv://khansharukhjpr66:v1f6w74Ocn5KcDMN@cluster0.ayshzfu.mongodb.net/shippgo_project");



app.listen(PORT, () => {
    console.log(`server started at PORT:${PORT}`);
})