//Connecting the server
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

//Brings in the URI code from the .env file
require("dotenv").config({ path: ".env" });

//Setting up the database
const uri = process.env.URI;
const mongoose = require("mongoose");
const Accounts = require("./Models/Account");

//Connecting the middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Getting the token for logins and logouts
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "Boo";

//Connecting to database
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Successful connection to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();


//Setting up the server
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", require("ejs").__express);

//Connecting the front end
app.get("/", (req, res) => {
  res.render("Index");
});

app.get("/About.HTML", (req, res) => {
  res.render("About");
});

app.get("/Index.HTML", (req, res) => {
  res.render("Index");
});

app.get("/My.HTML", (req, res) => {
  res.render("My");
});

app.get("/Login.HTML", (req, res) => {
  res.render("Login");
});

app.get("/Creation.HTML", (req, res) => {
  res.render("Creation");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




//Post actions:

//Login posting
app.post("/Login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Accounts.findOne({ email: email })
    .then((result) => {
      if (result) {
        if (password === result.password) {
          const token = jwt.sign({ email: result.email }, SECRET_KEY, {
            expiresIn: "1h",
          });
          res.json({ text: "password works!", token: token });
        } else {
          res.json({ text: "Password does not match" });
        }
      } else {
        res.json({ text: "Email not found" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ text: "An error occurred" });
    });
});



//Account creation posting
app.post("/Create", (req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const email = req.body.email;
  const password = req.body.password1;
  const passwordCheck = req.body.password2;

  if (password === passwordCheck && email!="") {
    Accounts.findOne({ email: email }).then((result) => {
      if (result === null) {
        var account = new Accounts({
          email: email,
          password: password,
          First_name: firstName,
          Last_name: lastName,
        });
        account.save().then(() => {
          res.json({ text: "Account created!" });
        });
      } else {
        res.json({ text: "Account already exists!" });
      }
    });
  } else {
    res.json({ text: "Faulty password!" });
  }
});


//Normal drink dispensing post
app.post("/Dispense1", (req, res) => {
  res.json({ text: "Your drink is being Dispensed!" });
});

app.post("/Dispense2", (req, res) => {
  res.json({ text: "Your drink is being Dispensed!" });
});

app.post("/Dispense3", (req, res) => {
  res.json({ text: "Your drink is being Dispensed!" });
});


//Half and half drink posting
app.post("/Drink", (req, res) => {
  console.log(req);
  const topDrink = req.body.topDrink;
  const botDrink = req.body.botDrink;
  const topFlavour = req.body.topFlavour;
  const botFlavour = req.body.botFlavour;

  if (topDrink != "" && botDrink != "" && topFlavour != "" && botFlavour != ""){
    res.json({ text: "Your drink is being Dispensed!" });
  }
  else if(topDrink === botDrink && topFlavour === botFlavour){
    res.json({ text: "Please choose something different that shows your creativity" });
  }
  else{
    res.json({ text: "Please choose a drink"});
  }
});
