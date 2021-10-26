import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //crea un'applicazione Nest, e come express usa app, come best practice per richiamare i metodi.
  await app.listen(3000);
}
bootstrap();
