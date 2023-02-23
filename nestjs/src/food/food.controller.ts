import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { Request } from 'express';
import { FoodDto, FoodSwaggerDto } from './dto/food.dto';
import { FoodService } from './food.service';

@UseGuards(AuthGuard("jwt"))
@ApiBearerAuth()
@Controller('/food')
export class FoodController {

    constructor(
        private foodService: FoodService,
        // tạo thuộc tính để lấy biến env
        private config: ConfigService
    ) {

    }

    @Get()

    getFood(): string {
        // cách lấy biến env 
        // this.config.get("TEST")

        try {
            return "get food";

        } catch (err) {
            throw new HttpException(err.message, HttpStatus.NOT_FOUND);
        }


    }

    @Post("getFoodId/:id")
    @ApiParam({ name: "id" })
    getFoodId(@Req() req: Request, @Body() body: FoodSwaggerDto): any {
        // cách lấy biến env 
        // this.config.get("TEST")


        // req.user trả về dữ liệu từ hàm validate của JwtStrategy

        return body;

    }
}


// yarn add @nestjs/passport passport passport-local @nestjs/jwt passport-jwt @types/passport-jwt