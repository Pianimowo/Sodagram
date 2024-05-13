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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})