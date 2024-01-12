const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
    songs:[
        {
            type: mongoose.Schema.Types.ObjectId,
			ref: "Song",
        }
    ]
})

module.exports = mongoose.model("Artist",artistSchema);