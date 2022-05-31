const req = require("express/lib/request");
const res = require("express/lib/response");

const Animal = require ("../models/animal.model");



const postNewInfo = async (req,res,next) =>{

    try {
        const newInfo = new Animal(req.body);
        if (req.file){
            newInfo.photo = req.file.path;
        }
        const infoDB = await newInfo.save ();
        return res.status(201).json(infoDB)
    } catch (error) {
        return next(error);
    };

};


const getAllAnimals = async (req,res,next) => {
    try {
        const allAnimals = await Animal.find();
        return res.json({
            status: 200,
            message: "Animals Ok",
            animals: allAnimals,
        });
        
    } catch (error) {
       return next(error);
    }
};

const getAnimalByID = async(req,res, next) =>{
  try {
   
    const id = req.params.id;
    const animalByID = await Animal.findById(id);
    return res.json({
        status:200,
        message: "Animal OK",
        animal: animalByID,
    });


  } catch (error) {
    return next(error);
  };


};


const createAnimal = async (req,res, next) => {
    try{
        console.log(req.body);
        const newAnimal = Animal(req.body);
        if (req.file){
            newAnimal.photo = req.file.path;
        }
        
        const createAnimal = await newAnimal.save();
        return res.json({
            status: 200,
            message: "Animal created",
            animal: createAnimal,
        })

    } catch (error) {
        return next(error)
    }

};


 const patchAnimal = async (req,res) => {

     try {
         const {id} = req.params;
         const patchAnimal = new Animal (req.body);
         patchAnimal._id = id;
         const AnimalDB = await Animal.findById(id);
         patchAnimal.continents = [...AnimalDB.continents,...patchAnimal.continents]
         const animalData = await Animal.findByIdAndUpdate(id,patchAnimal)
         return res.status(200).json(animalData)
        
     } catch (error) {
         return res.status(500).json(error)
     };


 };


module.exports = {getAllAnimals,getAnimalByID,createAnimal,postNewInfo,}