// yarn add express nodemon
// yarn add graphql express-graphql
const express = require('express');
const app = express();
app.use(express.json());

// import hàm khởi tạo server chạy của graphql
const { graphqlHTTP } = require('express-graphql');
// import đối tượng schema (chứa các đối tượng mà tự mình khởi tạo) 
const graphqlSchema = require('./graphql/schema');
//import đối tượng resolver (chứa các hàm xử lý chức năng)
const graphqlResolver = require('./graphql/resolver');

// add middleware một url để cấu hình và hiển thị giao diện tương tác của graphql
app.use("/api/grap", graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
}));

// hông biết
app.listen(8080)


/*
 B1: cài đặt thư viện prisma 
 B2: gõ yarn prisma init để tạo cấu trúc thư mục
 B3: Mở docker Mysql
 B4: Sửa chuỗi kết nối CSDL .env
 B5: Sửa dialect trong file schema.prisma
 B6: Chạy lệnh yarn prisma db pull để lấy table về model schema 
 B7: Chạt lệnh yarn prisma generate để làm mới thư mục model schema
*/