import multer from "multer";
import path from "path";

export const upload =multer({
    storage: multer.diskStorage({
        destination: function(req,res,cb){
            cb(null,"../")
        },
        filename: function (req,file,cb){
            cb(null,new Date().toISOString()+"-"+ file.originalname) /////////errorr
        }

    }),////////////(add destination and file name with their call back fuction)
    fileFilter: (req, file , cb)=>{
        let ext = path.extname(file.originalname);
        if(ext!== '.png' && ext!== '.jpg' && ext!== '.JPG' && ext!== '.jpeg' 
        && ext!== '.gif' && ext!== '.tif' && ext!== '.webp' && ext!== '.bmp' && ext!== '.tiff' && ext!== '.mp4'){
            return cb(new Error('Invalid file type'), false);
        }
        cb(null, true);
     }

});

// export default upload;