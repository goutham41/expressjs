const path = require("path");

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const  fs  = require("fs");

const app = express();

// This middleware is used to enable Cross Origin Resource Sharing This sets Headers to allow access to our client application
// app.use(cors());

// Storage Engin That Tells/Configures Multer for where (destination) and how (filename) to save/upload our files
const Storage = multer.diskStorage({
    
  destination: (req, file, cb) => {
    console.log(file)
    cb(null, "images"); //important this is a direct path fron our current file to storage location
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + path.extname(file.originalname));
  },
});

// The Multer Middleware that is passed to routes that will receive income requests with file data (multipart/formdata)
// You can create multiple middleware each with a different storage engine config so save different files in different locations on server
const upload = multer({ storage: Storage });
// app.set("view engine","ejs")
// // Single File Route Handler
app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single FIle upload success");
});

// // Multiple Files Route Handler
// app.post("/multiple", upload.array("images", 3), (req, res) => {
//   console.log(req.files);
//   res.send("Multiple Files Upload Success");
// });

app.get("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.json({status:"ok",data:req.file})
  res.send("Single FIle upload success");
});

app.listen(8080);
