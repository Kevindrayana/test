import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { PhoneService } from './phone.service';

@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) {}

  @Get()
  getPhoneData(
    @Query('countryCode') countryCode: string,
    @Query('phoneNumber') phoneNumber: string,
  ) {
    try {
      return this.phoneService.getPhoneData(countryCode, phoneNumber);
    } catch (error) {
      return new BadRequestException(
        'country code or phone number is not submitted',
      );
    }
  }
}
