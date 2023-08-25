import multer from "multer";
import path from "path";

export const upload =multer({
    storage: multer.diskStorage({}),
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