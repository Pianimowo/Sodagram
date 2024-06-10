const mocha = require('mocha');
const assert = require('assert');
const Accounts = require("../Models/Account");


//Describes tests:

describe('Saving Records', function(){

    //Create tests:
    it('Saves a record to the Database', (done) => {
        var person = new Accounts({
            email: "tongtonglu2018@gmail.com",
            password: "Hello",
            First_name: "Tong tong",
            Last_name: "Lu"
        });

        person.save().then(() => {
            assert(person.isNew===false);
            done();
        })
    });
});