import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatSubscriber } from './Subscriber/CatSubscriber';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CatSubscriber],
})
export class AppModule {}
