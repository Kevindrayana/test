import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { findPhoneDatasDto } from './dtos/findPhoneDatas.dto';

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
      throw new BadRequestException(
        'country code or phone number is not submitted',
      );
    }
  }

  @Post()
  @UsePipes(new ValidationPipe())
  findPhoneDatas(@Body() phoneData: findPhoneDatasDto) {
    return this.phoneService.getPhoneData(
      phoneData.countryCode,
      phoneData.phoneNumber,
    );
  }
}
