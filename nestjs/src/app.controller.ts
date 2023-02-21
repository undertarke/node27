import { Controller, Get, Post, Req, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
// const title = "a";
// const number = 123;
// const getNumber = () => {}

// nơi định nghĩa API
// tương tự đối tượng route bên express

// thuộc tính và phương thức
@Controller("/app")  // => decorators
export class AppController {
  // hàm khởi tạo
  constructor(private readonly appService: AppService) { }

  @Get() // => decorators => phương thức API GET
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/demo/:id") // khởi tạo một API phương thức POST
  getDemo(@Req() req: Request, @Param("id") paramId: string, @Body() body): number {
    let { id } = req.params;
    let { number1, number2 } = req.query;
    let { user_id, email, full_name } = req.body;
    // get data từ FE

    return this.appService.getSum(Number(number1), Number(number2));
  }
}
// localhost:8080/app
// localhost:8080/app/demo