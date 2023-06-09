import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneModule } from './phone/phone.module';
import config from '../config';
@Module({
  imports: [
    PhoneModule,
    MongooseModule.forRoot(config.mongoDBConnectionString),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
