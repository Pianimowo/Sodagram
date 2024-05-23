const express = require('express')
const path = require('path')
const app = express()
const port = 3000;
app.set("view engine", "ejs");
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/public')));
app.engine('ejs', require('ejs').__express);


app.get('/', (req, res) => {
  res.render('Index');
});

app.get('/About.HTML', (req, res) => {
  res.render('About');
});

app.get('/Index.HTML', (req, res) => {
  res.render('Index');
});

app.get('/Store.HTML', (req, res) => {
  res.render('Store');
});

app.get('/Login.HTML', (req, res) => {
  res.render('Login');
});

app.get('/Creation.HTML', (req, res) => {
  res.render('Creation');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://PIanimo:Pianoboi060328@cluster0.ok3w3yu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });


// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);