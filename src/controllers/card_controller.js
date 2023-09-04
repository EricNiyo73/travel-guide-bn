import cardmodel from '../model/card_model'


export const  createcard = async(req,res) => {
    try{
        const newcard =  new cardmodel({
            title:req.body.title,
            description:req.body.description,
            location:req.body.location,
            // title:req.body.title,

            
        })
        await newcard.save();
        return res.status(201).json({
            message: "created",
            card: newcard
        })
    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}