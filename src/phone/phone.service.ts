import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

//TODO add middleware to check if data in database

@Injectable()
export class PhoneService {
  getPhoneData(countryCode: string, phoneNumber: string) {
    if (!countryCode || !phoneNumber) {
      throw Error;
    }

    return this.numverify(countryCode + phoneNumber);
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
