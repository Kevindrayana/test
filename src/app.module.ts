import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneModule } from './phone/phone.module';

@Module({
  imports: [
    PhoneModule,
    MongooseModule.forRoot(
      'mongodb+srv://kevindrayana:1234@cluster0.bx3vlq7.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
