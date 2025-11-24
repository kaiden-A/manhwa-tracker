import Manhwa from "../models/Manhwa.js"


export const get_manhwa = async (req , res) => {

    try{

        const manhwa = await Manhwa.find();


        const totalCompleted = await Manhwa.countDocuments({status : "completed"})
        const totalHiatus = await Manhwa.countDocuments({status : "hiatus"})
        const totalOnGoing = await Manhwa.countDocuments({status : "ongoing"})
        const totalManhwa = await Manhwa.countDocuments();

        res.json({manhwa , totalManhwa , totalCompleted , totalHiatus , totalOnGoing})

    }catch(err){
        console.log(err);
    }

}

export const post_manhwa = async (req , res) => {

    const {name , imgUrl , manhwaUrl , currentChapter , latestChapter , status} = req.body;


    try{

        const newManhwa = await Manhwa.create({name , imgUrl , manhwaUrl , currentChapter , latestChapter , status});

        if(!newManhwa){
            return res.status(401).json({error : true , msg : "Fail Create Manhwa"})
        }


        res.json({success : true , data : newManhwa , msg : 'successfully Add manhwa'})

    }catch(err){

        console.log(err);
        res.status(500).json({error : true , msg : "Server Error"})
    }
}


export const update_manhwa = async (req , res) => {

    const manhwaId = req.params.id;

    const {name , imgUrl , manhwaUrl , currentChapter , latestChapter , status} = req.body;

    try{

        const updManhwa = await Manhwa.findByIdAndUpdate(
            manhwaId,
            {name , imgUrl , manhwaUrl , currentChapter , latestChapter , status} ,
            {new :true}
        )

        if(!updManhwa){
            return res.status(401).json({ error : true , msg :'Fail Update Manhwa'})
        }

        res.json({success : true , msg : "Successfully Update Manhwa", data : updManhwa })

    }catch(err){
        console.log(err);

        res.status(501).json({error : true , msg : 'server Error'})
    }
    
}