const { PrismaClient } = require('@prisma/client');
const model = new PrismaClient();

// {
//     food_id: 9,
//     food_name: 'Bánh tráng',
//     image: 'https://res.klook.com/image/upload/q_85/c_fill,w_750/v1596008298/blog/eibedalo0wncojkerkpg.jpg',
//     price: 33,
//     desc: 'bánh cháng',
//     type_id: 4
//     food_type: { type_id: 4, type_name: 'Ăn vặt' }
//   }

const graphqlResolver = {
    // trùng tên hàm và định dạng dữ liệu đã khai bao bẹn schema
    LayNguoiDung: async () => {

        return [
            {
                id: 1,
                hoTen: "A",
                tuoiTac: 99,
                email: "a@gmail.com"
            },
            {
                id: 2,
                hoTen: "B",
                tuoiTac: 1,
                email: "b@gmail.com"
            }
        ]
    },
    LayThucAn: async () => {
        console.log(await model.food.findMany({
            include:
            {
                food_type: true
            }
        }))
        return await model.food.findMany({
            include:
            {
                food_type: true
            }
        });
    },
    ThemNguoiDung: (argu) => {
        let { maNguoiDung, hoTen } = argu
        // model.user.create()
        return [maNguoiDung, hoTen];
    }
}

module.exports = graphqlResolver;