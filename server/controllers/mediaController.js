// Image upload logic 
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) { cb(null, 'uploads/'); },
  filename(req, file, cb) { cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`); },
});

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    const filetypes = /jpg|jpeg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) { return cb(null, true); } else { cb('Images only!'); }
  },
});

const uploadImage = (req, res) => {
    if(!req.file) return res.status(400).json({ message: 'No file uploaded' });
    res.send({ message: 'Image uploaded', filePath: `/uploads/${req.file.filename}` });
};

module.exports = { upload, uploadImage };