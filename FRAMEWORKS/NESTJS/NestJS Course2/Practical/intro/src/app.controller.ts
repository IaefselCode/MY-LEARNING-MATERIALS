import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//express ->
//server.js -> routes, controller, services
//route A -> controller A -> service A

//Handles incoming requests and outgoing responce
//get, post, put, delete, patch 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
