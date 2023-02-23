import { ApiProperty } from "@nestjs/swagger"

export interface FoodDto {
    food_id: number,
    food_name: string,
    image: string,
    price: number,
    desc: string,
    type_id: number
}


export class FoodSwaggerDto {

    @ApiProperty({ description: "food_id", type: Number })
    food_id: number

    @ApiProperty({ description: "food_name", type: String })
    food_name: string

    @ApiProperty({ description: "image", type: String })
    image: string

    @ApiProperty({ description: "price", type: Number })
    price: number

    @ApiProperty({ description: "desc", type: String })
    desc: string

    @ApiProperty({ description: "type_id", type: Number })
    type_id: number
}

