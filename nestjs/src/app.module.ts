import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    FoodModule,
    // cài đặt để sử dụng configService cho tất cả đối tượng
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
