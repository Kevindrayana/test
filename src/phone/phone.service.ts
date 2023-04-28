import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PhoneService {
  constructor(@InjectModel('Phone') private readonly phoneModel) {}

  async getPhoneData(countryCode: string, phoneNumber: string) {
    if (!countryCode || !phoneNumber) {
      throw new Error();
    }

    const phone = await this.phoneModel
      .find({ phone: countryCode + phoneNumber })
      .select('phone')
      .select('country_name')
      .select('location')
      .select('carrier')
      .select('line_type');

    if (phone.length) {
      return phone;
    } else {
      const res = await this.numverify(countryCode + phoneNumber);

      await this.phoneModel({
        phone: countryCode + phoneNumber,
        ...res,
      }).save();

      return await this.phoneModel
        .find({ phone: countryCode + phoneNumber })
        .select('phone')
        .select('country_name')
        .select('location')
        .select('carrier')
        .select('line_type');
    }
  }

  async numverify(number: string) {
    const myHeaders = new fetch.Headers();
    const apiKey = 'nIBe1yIXwaow8Qy9IYRvw6wscVlOUJAX';
    myHeaders.append('apikey', apiKey);

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
