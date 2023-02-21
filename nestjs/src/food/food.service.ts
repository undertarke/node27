import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { FoodDto } from './dto/food.dto';


@Injectable()
export class FoodService {

    prisma: PrismaClient = new PrismaClient();

    getFood(): Promise<FoodDto[]> {
        
        let data = this.prisma.food.findMany();
        return data;
    }

}

// yarn add prisma @prisma/client
// yarn prisma init