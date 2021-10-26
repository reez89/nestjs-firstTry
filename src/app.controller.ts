import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// questo controller passerà solo richieste con questo dominio d'esempio your-domain.com/, se volessimo avere delle rotte specifiche come /users e /product, dovremmo specificarel all'interno del controller in questo modo @Controller('users') ...
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  
  getHello(): any {
    return this.appService.getHello();
  }
}
