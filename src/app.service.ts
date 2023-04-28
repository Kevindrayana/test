import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // business logic
  getHello(): string {
    return 'Hello!';
  }
}
