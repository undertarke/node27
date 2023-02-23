import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { FoodDto } from './dto/food.dto';


@Injectable()
export class FoodService {

    prisma: PrismaClient = new PrismaClient();


}

// yarn add prisma @prisma/client
// yarn prisma init