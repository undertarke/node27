const { buildSchema } = require('graphql');

const graphqlSchema = buildSchema(`

    type User {
        id: ID
        hoTen: String     
        tuoiTac: Int    
        email: String
    }

    type Food {
        food_id: ID
        food_name: String
        image: String
        price: Int
        desc: String
        type_id: Int
        food_type: Food_Type
    }

    type Food_Type {
        type_id: Int
        type_name: String
    }

    type RootQuery {
        LayNguoiDung: [User]
        LayThucAn: [Food]
    }

    type RootMutation{
        ThemNguoiDung(maNguoiDung: Int, hoTen: String): [String]
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);

module.exports = graphqlSchema;