import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [ProductsModule], //vengono importati i moduli.
  controllers: [AppController], // si occupano delle richieste in entrata, e inviando una risposta.
  providers: [AppService], // sono proprio come i service di angular, e servono per non avere troppo codice nei controller.
})
export class AppModule {}
