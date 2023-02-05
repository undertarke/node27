// yarn init

// yarn add express nodemon dotenv

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static("."));

app.listen(8080);

// yarn add prisma @prisma/client

// lệnh kết nối CSDL
// model
// yarn prisma init

// @prisma/client => các hàm thực thi truy vấn dữ liệu

// yarn prisma generate => cập nhật lại các model mới trong schema

const { PrismaClient } = require('@prisma/client');
const model = new PrismaClient();

app.get("/getFood", async (req, res) => {

    // model.food.findAll({where}) => SELECT * FROM food WHERE;
    // SELECT * FROM food WHERE food_name LIKE '%a%'

    let dataView = await model.food.findMany();
    // ({
    //     // JOIN kết bảng
    //     include: {
    //         food_type: true
    //     },
    //     // điều kiện lấy data
    //     where: {
    //         food_name: {
    //             contains: "a", // => LIKE '%a%'
    //         },
    //         food_id: 1
    //     },
    //     // sắp xếp 
    //     orderBy: {
    //         food_name: 'desc'
    //     }
    // });

    // let dataFood = { food_id: "id", food_name: "name" };
    // // create
    // await model.food.create({ data: dataFood })
    // //update
    // await model.food.update({ data: dataFood, where })
    // //delete
    // await model.food.delete({ where })

    res.send(dataView);
})

// POST API
app.post("/postAPI",(req,res)=>{
    res.send("POST API")
})


// yarn add swagger-ui-express swagger-jsdoc
//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        info: {
            title: "api",
            version: "1.0.0"
        }
    },
    apis: ["swagger/index.js"]
}
const specs = swaggerJsDoc(options);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));


// type script


