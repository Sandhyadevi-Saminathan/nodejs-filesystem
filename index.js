const express = require("express")
const app = express()
app.use(express.json())

//current date and time
const dt = Date.now();
const date_obj = new Date(dt);
const date = date_obj.getDate();
const month = date_obj.getMonth() + 1;
const year = date_obj.getFullYear();
const time = date_obj.getTime();
const fileName = year + "-" + month + "-" + date + "-" + time;
//content
const timestamp = new Date().toISOString();
const render = "https://nodejs-filesystem-gdp2.onrender.com/";
const github = "https://github.com/Sandhyadevi-Saminathan/nodejs-filesystem";
const hash = "100644 blob 4fb80a2b2327664640e7068957d383336e2b7c4a ";
const renders = "\r\n" + render + "\r\n" + github + "\r\n" + hash + "\r\n"
console.log(renders)
//file
const fs = require("fs");
fs.writeFile(`${fileName}.txt`, timestamp, function (err) { console.log("success") });


fs.appendFile(`${fileName}.txt`, renders, function (err) { console.log("success") });


//read file
let files = [];
fs.readdir("./", function (err, list) { files.push(list) })

//api endpoint
app.get("/", (req, res) => {
    res.json({ files });
});

app.listen(8000);