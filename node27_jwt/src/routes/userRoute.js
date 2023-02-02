const express = require('express');
const userRoute = express.Router();

//import commonjs Module 
// import hàm getUser từ thư mục controller
const { getUser, getUserId, createUser, updateUser, signUp, login } = require('../controllers/userController');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${process.cwd()}/public/img`);
    },
    filename: (req, file, cb) => {
        console.log(file)
        const d = new Date();
        const newName = d.getTime() + "_" + file.originalname;
        cb(null, newName);
    }
})
const upload = multer({ storage });

userRoute.post("/upload", upload.single("file"), (req, res) => {

    let fs = require("fs");
    fs.readFile(process.cwd() + "/public/img/" + req.file.filename, (err, data) => {

        let fileName = `"data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}"`;
        //xoa hình vừa up
        fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);

        res.send(fileName);
    })
    // res.send(req.file)
});

// tạo 5 API user
// 2 API GET => get all và get id
// 1 API POST
// 1 API PUT
// 1 API DELETE

// tạo API phương thức GET
userRoute.get("/getUser", getUser)
userRoute.get("/getUserId/:id", getUserId)

// tạo API phương thức POST
userRoute.post("/createUser", createUser)

// API phương thức PUT
userRoute.put("/updateUser/:id", updateUser)


// tạo API phương thức PUT
// userRoute.put("/updateUser",(req,res)=>{});

// API đăng ký
userRoute.post("/signUp",signUp);

// API đăng nhập
userRoute.post("/login",login);

module.exports = userRoute;