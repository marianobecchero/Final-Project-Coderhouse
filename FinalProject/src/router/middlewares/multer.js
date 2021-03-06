const multer = require('multer')

/* ------ GUARDAR FOTO --------*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage })

  module.exports = { upload }