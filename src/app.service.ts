import { Injectable } from '@nestjs/common';


//Come in Angular, i service sono pensati per conservare la logica, e rendere i controller, in questo caso, piu' leggibili.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
