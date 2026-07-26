import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 

//root module -> use all sub modules
@Module({
  imports: [], //Import other modules is needed
  exports: [], //Import other modules is needed in other modules
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
