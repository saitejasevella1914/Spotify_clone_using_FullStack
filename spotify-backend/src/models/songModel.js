import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    name:{type:String,required: true},
    desc:{type:String,required: true},
    album:{type:String,required: true},
    image: {type:String,requied: true},
    file: {type:String,requied: true},
    duration: {type:String, requied: true}
})


const songModel = mongoose.models.song || mongoose.model("song",songSchema);

export default songModel;