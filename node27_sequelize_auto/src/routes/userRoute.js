const express = require('express');
const userRoute = express.Router();

//import commonjs Module 
// import hàm getUser từ thư mục controller
const { getUser, getUserId, createUser, updateUser } = require('../controllers/userController');

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

module.exports = userRoute;