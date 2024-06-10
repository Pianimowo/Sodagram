const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const AccountDataSchema = new Schema({
  email: String,
  password: String,
  First_name: String,
  Last_name: String,
  Drink_preference_one: {
    drink1: String,
    drink2: String,
    drink3: String
  },
  Drink_preference_two: {
    drink1: String,
    drink2: String,
    drink3: String
  },
  Drink_preference_three: {
    drink1: String,
    drink2: String,
    drink3: String
  }
})

const AccountData = mongoose.model("accountdata", AccountDataSchema);

module.exports = AccountData;