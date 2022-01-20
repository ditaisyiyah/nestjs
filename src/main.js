import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, NestFastifyApplication);
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
