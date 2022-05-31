const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AnimalSchema  = new Schema (
    {
    name: {type: String,required: true},
    weigth: {type: String,required: false},
    species: {type: String,required: true},
    photo: {type: String,required: true},
    continent: {type: String,required: true},
    },
    {timestamps: true}
    );

const Animal = mongoose.model("animal", AnimalSchema);

module.exports = Animal; 

