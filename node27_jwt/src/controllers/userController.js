
// const User = require('../models/user');
const sequelize = require('../models/index');
const initModels = require('../models/init-models');
const model = initModels(sequelize);
const { successCode, failCode, errorCode } = require('../config/response');
const { createToken } = require('../utils/jwtoken');

// get all
const getUser = async (req, res) => {
    try {
        // SELECT * FROM user;
        // bất đồng bộ
        let data = await model.user.findAll(); // => list object => [{}]

        successCode(res, data, "Lấy dữ liệu thành công")

    } catch (err) {
        // res.status(500).send("Lỗi Back end");
        errorCode(res, "Lỗi Back end");
    }
}

//get id
const getUserId = async (req, res) => {
    try {
        let { id } = req.params;
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await model.user.findOne({
            where: {
                user_id: id
            }
        }); // => object => {}

        if (dataOne)
            // res.status(200).send(dataOne);
            successCode(res, dataOne, "Lấy user thành công");
        else
            // res.status(400).send("User không tồn tại !");
            failCode(res, id, "User không tồn tại");

    } catch (err) {
        // res.status(500).send("Lỗi Back end");
        errorCode(res, "Lỗi Back end");

    }
}

// xử lý thêm user
const createUser = async (req, res) => {
    try {

        // lấy data từ FE
        let { full_name, email, pass_word } = req.body;

        // ES6 => object literal
        let newUser = {
            full_name,
            email,
            pass_word
        }

        // thêm data vào CSDL
        let data = await model.user.create(newUser);
        if (data)
            res.status(200).send("Thêm user thành công");

    } catch (err) {
        res.status(500).send("Lỗi Back end");

    }
}
const updateUser = async (req, res) => {

    try {
        let { id } = req.params; // => 13
        // SELECT * FROM user WHERE user_id=req.param.id;

        let dataOne = await model.user.findOne({
            where: {
                user_id: id
            }
        }); // => object => {}

        if (dataOne) {
            //update user
            let { full_name, email, pass_word } = req.body;

            // ES6 => object literal
            let userUpdate = {
                full_name,
                email,
                pass_word
            }
            // UPDATE user SET email=email, ... WHERE user_id = id;
            let data = await model.user.update(userUpdate, {
                where: {
                    user_id: id
                }
            });
            console.log(data); // => [1]
            if (data[0] == 1)
                res.status(200).send("Cập nhật user thành công");
            else
                res.status(200).send("Không có gì mới để cập nhật");
        }
        else
            res.status(400).send("User không tồn tại !");

    } catch (err) {
        res.status(500).send("Lỗi Back end");
    }

}

// User.destroy()
// yarn add bcrypt

const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {

        // lấy data từ FE
        let { full_name, email, pass_word } = req.body;

        // ES6 => object literal
        let newUser = {
            full_name,
            email,
            pass_word: bcrypt.hashSync(pass_word, 10)
        }

        // thêm data vào CSDL
        let data = await model.user.create(newUser);
        if (data)
            res.status(200).send("Đăng ký thành công");

    } catch (err) {
        res.status(500).send("Lỗi Back end");

    }

}
const login = async (req, res) => {
    try {
        // truy cập database
        // get user ra đúng với email và pass word
        // kiểm tra 2 lần: check email mới check pass

        let { email, pass } = req.body;

        let checkUser = await model.user.findOne({
            where: {
                email: email
            }
        })

        // email user có tồn tại
        if (checkUser) {

            // kiểm tra tiếp pass word
            // pass: chưa dc mã hóa
            // user pass_word: mã hóa

            //check pass word
            let checkPass = bcrypt.compareSync(pass, checkUser.pass_word);

            if (checkPass) {

                let token = createToken(checkUser);

                successCode(res, token, "Login thành công");

            } else {
                // pass word sai
                failCode(res, { email, pass }, "Mật khẩu không đúng !");
            }

        } else {
            // email không tồn tại
            failCode(res, { email, pass }, "Email không tồn tại !");
        }
        // quên mật khẩu

    }
    catch (err) {
        res.status(500).send("Lỗi Back end");

    }
}

module.exports = {
    getUser,
    createUser,
    getUserId,
    updateUser,
    signUp,
    login
}