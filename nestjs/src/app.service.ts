import { Injectable } from '@nestjs/common';


// nơi định nghĩa các chức năng xử lý
// tương tự controller bên express
@Injectable() // => decorators
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getSum(a: number, b: number): number {
    return a + b;
  }
}
