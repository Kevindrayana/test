<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Phone Verification API

This is a backend API for phone number verification that utilizes [Numverify](https://numverify.com/), a service that provides phone number information such as the country location, carrier, and line type.

## Usage

### GET /phone

To retrieve phone number information using a GET request, send a request to the `/phone` endpoint with the following query parameters:

- `countryCode`: The country code of the phone number in string format (eg. "1").
- `phoneNumber`: The phone number to verify, without any formatting or special characters in string format (eg. "2025886500").

The API will return the phone number information in JSON format, including the country location, carrier, and line type of the corresponding phone number.

### POST /phone

To retrieve phone number information using a POST request, send a request to the `/phone` endpoint with the following request body:

```json
{
  "countryCode": "1",
  "phoneNumber": "2025886500"
}
```
Replace the example values with the country code and phone number that you want to verify.

The API will return the phone number information in JSON format, including the country location, carrier, and line type of the corresponding phone number.

### Response Format

The API returns a JSON object with the following properties:

- `_id`: A string representing a unique identifier for the phone number.
- `phone`: A string representing the phone number in the format `[country code][phone number]`.
- `country_name`: A string representing the name of the country associated with the phone number.
- `location`: A string representing the city or town associated with the phone number.
- `carrier`: A string representing the name of the carrier associated with the phone number.
- `line_type`: A string representing the type of line associated with the phone number. Possible values are "mobile", "landline", or "voip".

#### Example Response
```json
{
    "_id": "644bd6d9d9fd85c0a9f8b5e5",
    "phone": "14158586273",
    "country_name": "United States of America",
    "location": "Novato",
    "carrier": "AT&T Mobility LLC",
    "line_type": "mobile"
}
```

## MongoDB

This program uses MongoDB as the database to store and retrieve data. To use MongoDB with this program, you'll need to do the following:

1. Install MongoDB: You'll need to have MongoDB installed on your local machine or server. You can download MongoDB from the official website: https://www.mongodb.com/try/download/community

2. Configure your MongoDB connection string: In the `config.ts` file, update the `mongoDBConnectionString` value to your own MongoDB connection string.
