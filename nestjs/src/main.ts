import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// ES module
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(express.static("."));

  //định nghĩa swagger
  // nơi định nghĩa các thuộc tính mở rộng của swagger
  const config = new DocumentBuilder().setTitle("swagger").addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api", app, document);

  await app.listen(8080);
}
bootstrap();

// nodemon => yarn start:dev