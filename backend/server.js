// server.js
const express = require("express");
const multer = require("multer");
const { execFile } = require("child_process");
const fs = require("fs");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });
app.use(express.urlencoded({ extended: true }));

app.post("/protect-pdf", upload.single("file"), (req, res) => {
  const password = req.body.password;
  const desiredName = req.body.filename || "protected";
  const inputPath = req.file.path;
  
  // Sanitize the filename and create output path
  const sanitizedName = desiredName.replace(/[^a-z0-9\-_.]/gi, '_');
  const outputPath = `${sanitizedName}-${Date.now()}.pdf`;
  const downloadName = `${sanitizedName}.pdf`;

  execFile("python", ["encrypt.py", inputPath, outputPath, password], (err) => {
    if (err) {
      console.error("Error encrypting PDF:", err);
      return res.status(500).send("Encryption failed.");
    }

    res.download(outputPath, downloadName, (downloadErr) => {
      // Clean up files after download
      fs.unlinkSync(inputPath);
      fs.unlinkSync(outputPath);
      
      if (downloadErr) {
        console.error("Download error:", downloadErr);
      }
    });
  });
});

app.listen(8000, () => {
  console.log("✅ Server running on http://localhost:8000");
});