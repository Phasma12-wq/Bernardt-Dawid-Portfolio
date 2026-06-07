var express = require('express');
var path = require('path');
const pageRouter = require('./routes/pageRoute');
const bodyParser = require('body-parser'); 

const app = express();
const port = 3000;

//Middleware to manage internal errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};
app.use(errorHandler);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})