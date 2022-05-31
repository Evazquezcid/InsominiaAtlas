const Continent = require("../models/continent.model");



const getAllContinents = async (req,res,next) => {
    try {
        const allContinents = await Continent.find();
        return res.json({
            status: 200,
            message: "Continent Ok",
            continents: allContinents,
        });
        
    } catch (error) {
       return next(error);
    }
};


const getContinentByID = async(req,res, next) =>{
    try {
     
      const id = req.params.id;
      const continentByID = await Continent.findById(id);
      return res.json({
          status:200,
          message: "Continent OK",
          continent: continentByID,
      });
  
  
    } catch (error) {
      return next(error);
    };
  
  
  };


  const createContinent = async (req,res, next) => {
    try{
        console.log(req.body);
        const newContinent = new Continent(req.body);
        const createContinent = await newContinent.save();
        return res.json({
            status: 200,
            message: "Continent created",
            continent: createContinent,
        })

    } catch (error) {
        return next(error)
    }

};
  

module.exports = {getAllContinents,getContinentByID,createContinent }