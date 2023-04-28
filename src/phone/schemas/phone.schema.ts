import * as mongoose from 'mongoose';

export const PhoneSchema = new mongoose.Schema({
  phone: String,
  country_name: String,
  location: String,
  carrier: String,
  line_type: String,
});
