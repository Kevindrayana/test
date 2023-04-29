import { BadRequestException, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { InjectModel } from '@nestjs/mongoose';
import config from 'src/config';
import { Model } from 'mongoose';
import { Phone } from './interfaces/phone.interface';
@Injectable()
export class PhoneService {
  constructor(
    @InjectModel('Phone') private readonly phoneModel: Model<Phone>,
  ) {}

  async getPhoneData(countryCode: string, phoneNumber: string) {
    if (!countryCode || !phoneNumber) {
      throw new BadRequestException(
        'country code or phone number is not submitted',
      );
    }

    const phone = await this.phoneModel
      .findOne({ phone: countryCode + phoneNumber })
      .select('-__v');

    if (phone) {
      return phone;
    }

    const res = await this.numverify(countryCode + phoneNumber);

    const newPhone = new this.phoneModel({
      phone: countryCode + phoneNumber,
      ...res,
    });

    await newPhone.save();

    return newPhone.toObject();
  }

  async numverify(number: string) {
    const myHeaders = new fetch.Headers();
    myHeaders.append('apikey', config.apiKey);

    const requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders,
    };

    try {
      const response = await fetch(
        `https://api.apilayer.com/number_verification/validate?number=${number}`,
        requestOptions,
      );
      const result = await response.json();
      const { country_name, location, carrier, line_type } = result;
      return { country_name, location, carrier, line_type };
    } catch (error) {
      return error;
    }
  }
}
