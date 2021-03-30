const express = require('express');
const exphbs = require('express-handlebars');
const pageroutes = require('./routes/pages');
const path = require('path')

const PORT = process.env.PORT || 5500;

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));

app.use(pageroutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('Server has been started...');
});
