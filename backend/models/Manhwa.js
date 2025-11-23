import mongoose from "mongoose";


const ManhwaSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    imgUrl : {
        type : String
    },

    manhwaUrl : {
        type : String
    },

    currentChapter : {
        type : Number,
        required : true
    },

    latestChapter : {
        type : Number,
        default : 0
    },

    status : {
        type: String
    }

} , {timeStamps : true})

const Manhwa = mongoose.model('manhwa' , ManhwaSchema);
export default Manhwa;