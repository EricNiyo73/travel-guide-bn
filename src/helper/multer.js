import multer from "multer";
import path from "path"; 


// export const upload =multer.diskStorage({
//     storage: multer.diskStorage({
//         destination: function(req,res,cb){
//             cb(null,"./uploads")
//         },
//         filename: function (req,file,cb){
//             cb(null, Date.now()+"-"+ file.originalname) /////////errorr
//         }

//     }),////////////(add destination and file name with their call back fuction)
//     fileFilter: (req, file , cb)=>{
//         let ext = path.extname(file.originalname);
//         if(ext!== '.png' && ext!== '.jpg' && ext!== '.JPG' && ext!== '.jpeg' 
//         && ext!== '.gif' && ext!== '.tif' && ext!== '.webp' && ext!== '.bmp' && ext!== '.tiff' && ext!== '.mp4'){
//             return cb(new Error('Invalid file type'), false);
//         }
//         cb(null, true);
//      }

// });



const storage = multer.diskStorage({
    filename: function(req,file,cb){
        cb(null, Date.now()+'-'+ file.originalname)
    }

}) 
const fileFilter= (req, file , cb)=>{
    let ext = path.extname(file.originalname);
    if(ext!== '.png' && ext!== '.jpg' && ext!== '.JPG' && ext!== '.jpeg' 
    && ext!== '.gif' && ext!== '.tif' && ext!== '.webp' && ext!== '.bmp' && ext!== '.tiff' && ext!== '.mp4'){
        return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
 }
const upload = multer({
    storage: storage,
    limits:{fileSize:5*1024*1024},
    fileFilter: fileFilter 
})
module.exports = upload;

// export default upload;