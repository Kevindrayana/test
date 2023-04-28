import { Controller, Get, Query } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Get()
  getPhoneData(
    @Query('countryCode') countryCode: string,
    @Query('phoneNumber') phoneNumber: string,
  ) {
    return this.phoneService.getPhoneData(countryCode, phoneNumber);
  }
}
