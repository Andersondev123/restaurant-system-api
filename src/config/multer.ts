
import multer from "multer";

//Usar o memoryStorage para manter o arquivo em memória e enviar direto para o cloudinary.

export default {
    storage: multer.memoryStorage(),
    limmits:{
        fileSize: 4 * 1024 * 1024 // 4mb
    },
    fileFilter: (req: any, file: Express.Multer.File, cb: any)=>{
        const alowedMimes = ["image/jpeg", "image/jpg", "image/png"];
        if(alowedMimes.includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(new Error("Formato de arquivo inválido, use apenas JPEG, JPG, PNG."))
        }
    },
};