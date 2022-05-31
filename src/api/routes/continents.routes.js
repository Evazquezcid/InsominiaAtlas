const  express = require("express");

const router = express.Router();

const { getAllContinents,getContinentByID,createContinent } = require("../controllers/continents.controller")

router.get("/", getAllContinents);
router.get("/:id",getContinentByID);
router.post("/", createContinent);

module.exports = router 