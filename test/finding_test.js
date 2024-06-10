const mocha = require('mocha');
const assert = require('assert');
const Accounts = require("../Models/Account");


//Describes tests:

describe('Finding Records', function(){


    var person;

    //Before each test:
    beforeEach((done) => {
            person = new Accounts({
            email: "tongtonglu2018@gmail.com",
            password: "Hello",
            First_name: "Tong tong",
            Last_name: "Lu"
        });

        person.save().then(() => {
            done();
        })
    });


    //creates the tests
    it('Finds one record from the database', (done) => {
        Accounts.findOne({First_name:"Tong tong"}).then((result) =>{
            console.log(result);
            assert(result.First_name === "Tong tong");
            done();
        })
    });

    it('Finds one record by Id from the database', (done) => {
        Accounts.findOne({_id: person._id}).then((result) =>{
            console.log(result._id.toString());
            assert(result._id.toString() === person._id.toString());
            done();
        })
    });
});