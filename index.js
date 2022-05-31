const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;


const AnimalsRouter = require("./src/api/routes/animals.routes")
const ContinentsRouter = require("./src/api/routes/continents.routes")

const {connect} = require("./src/utils/database")

dotenv.config()

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));



connect();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET

})

//CONFIGURAMOS LOS HEADERS
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });



server.use(cors({
    origin: "*",
    credentials:true
}))


server.use("/animals",AnimalsRouter)
server.use("/continents",ContinentsRouter)

const PORT = process.env.PORT || 8080;

server.listen(PORT,() => {
    console.log(`Server listening on http://localhost:${PORT}`);
})