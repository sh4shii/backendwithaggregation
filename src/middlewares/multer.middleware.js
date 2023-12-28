import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = path.join(__dirname, "public", "temp");
    cb(null, destinationPath);
  },
  filename: function (req, file, cb) {
    const uniqueIdentifier = Date.now() + "_" + Math.floor(Math.random() * 100 + 1);
    const fileNameWithoutExtension = `shashi_${uniqueIdentifier}`;
    cb(null, fileNameWithoutExtension);
  },
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});
