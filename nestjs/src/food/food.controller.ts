import { Controller, Get } from '@nestjs/common';
import { FoodDto } from './dto/food.dto';
import { FoodService } from './food.service';

@Controller('/food')
export class FoodController {

    constructor(
        private foodService: FoodService
    ) {

    }

    @Get()
    getFood(): Promise<FoodDto[]> {
        return this.foodService.getFood();
    }
}
