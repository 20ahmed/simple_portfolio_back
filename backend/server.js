const mongoose = require("mongoose");
const multer = require("multer");
const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://admin:01125733974@portfolio.frzb4.mongodb.net/portfolio?retryWrites=true&w=majority&appName=portfolio"
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json({
    status: "success",
    message: "File uploaded successfully",
    filepath: `http://localhost:3000/${req.file.filename}`,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
