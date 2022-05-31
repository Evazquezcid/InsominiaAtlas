const express = require("express");

const upload = require("../middlewares/file")

const router = express.Router();

const { getAllAnimals, getAnimalByID, createAnimal, postNewInfo} = require("../controllers/animals.controller");


router.get("/", getAllAnimals);
router.get("/:id",getAnimalByID);
// router.post("/", createAnimal);
router.post("/", createAnimal, upload.single("photo"),createAnimal);
// router.post("/", postNewInfo, upload.single("photo"),postNewInfo);



module.exports = router
