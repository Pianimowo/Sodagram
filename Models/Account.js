//Model for creating the accounts
const mongoose = require ('mongoose');

//importing the schema
const Schema = mongoose.Schema;

//The model for the Accounts
const AccountDataSchema = new Schema({
  email: String,
  password: String,
  First_name: String,
  Last_name: String
})

const AccountData = mongoose.model("accountdata", AccountDataSchema);

//Exports the model to be used elsewhere
module.exports = AccountData;