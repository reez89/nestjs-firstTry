import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // si occupano delle richieste in entrata, e inviando una risposta.
  providers: [AppService], // sono proprio come i service di angular, e servono per non avere troppo codice nei controller.
})
export class AppModule {}
