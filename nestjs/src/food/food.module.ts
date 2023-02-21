import { Module } from '@nestjs/common';
import { FoodController } from './food.controller';
import { FoodService } from './food.service';

@Module({
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}

// nest g module food
// nest g controller food --no-spec
// nest g service food --no-spec
