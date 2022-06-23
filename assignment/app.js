const express = require("express");
const es6Renderer = require("express-es6-template-engine");
const path = require("path");

const app = express();

app.use(express.static(path.join('public')));

app.engine('html', es6Renderer);

app.set('views', 'views');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('product', {locals: {}});
})
app.get('/product', (req, res) => {
  res.render('product', {locals: {}});
})
app.get('/pricing', (req, res) => {
  res.render('pricing', {locals: {}});
})
app.get('/checkout', (req, res) => {
  res.render('checkout', {locals: {}});
})

require("http")
  .createServer({}, app)
  .listen(3000, function() {
    console.log("Visit http://localhost:3000")
  });
