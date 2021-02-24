import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(":nom")
  getHello(@Param('nom')nom:string): any {
    console.log(nom);
    return this.appService.getHello(nom);
  }
}
