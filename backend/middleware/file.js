const multer = require("multer");

const MIMI_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIMI_TYPE_MAP[file.mimetype];
    let error = new Error('Invalid mime type');
    if (isValid) {
      error = null
    }
    cb(error, 'backend/images')
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const ext = MIMI_TYPE_MAP[file.mimetype];
    cb(null, name + '-' + Date.now() + '.' + ext)
  }
});

module.exports = multer({storage: fileStorage}).single('image');
