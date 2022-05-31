const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContinentSchema = new Schema (
    
    {
    name: {type: String,required: true},
    climate: {type: String,required: false},
    km: {type: String,required: true},
    animals: [
        {type: Schema.Types.ObjectId, ref: "animal", require: false},
      ],
    },
    {timestamps:true}
); 

const Continent = mongoose.model("continent",ContinentSchema)

module.exports = Continent;