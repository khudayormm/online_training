const multer = require("multer")
const md5 = require('md5')
const sharp = require('sharp')


const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/data/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, md5(file.originalname) + path.extname(file.originalname))
    }
})
 

const upload = multer({ storage })


module.exports = upload