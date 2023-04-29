import { IsNotEmpty, IsNumberString } from 'class-validator';

export class findPhoneDatasDto {
  @IsNotEmpty()
  @IsNumberString()
  countryCode: string;

  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;
}
