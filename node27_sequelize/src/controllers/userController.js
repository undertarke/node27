const User = require('../models/user');

const getUser = async (req, res) => {
    let { id } = req.params;
    // SELECT * FROM user WHERE user_id=req.param.id;
    // bất đồng bộ

    let data = await User.findAll({
        where: {
            user_id: id
        }
    }); // => list object => [{}]

    // let dataUserId = data.find(item => item.user_id == id)

    let dataOne = await User.findOne({
        where: {
            user_id: id
        }
    }); // => object => {}

    res.send(dataOne);
}

// xử lý thêm user
const createUser = async (req, res) => {
    // SELECT *

    res.send("Create User");
}

module.exports = {
    getUser,
    createUser
}