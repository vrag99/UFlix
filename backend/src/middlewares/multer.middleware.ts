import { mkdir, mkdirSync } from 'fs';

import multer from 'multer';
import path from 'path';
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000000000 },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(mp4|png|jpeg|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error('only upload mp4 format'));
    }
    cb(undefined, true);
  },
});
