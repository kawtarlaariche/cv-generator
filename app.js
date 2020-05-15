require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var moment = require('moment')

const NODE_ENV = process.env.NODE_ENV;
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY
const TOKEN_EXPIRY_TIME = process.env.TOKEN_EXPIRY_TIME
const PORT = process.env.PORT

console.log('PORT '+PORT)
console.log('NODE_ENV '+NODE_ENV)
console.log('TOKEN_EXPIRY '+TOKEN_EXPIRY_TIME)
console.log('TOKEN_SECRET_KEY '+TOKEN_SECRET_KEY)

const educationRoutes = require('./routes/education');
const experienceRoutes = require('./routes/experience');
const projectRoutes = require('./routes/project');
const languageRoutes = require('./routes/language');
const hobbyRoutes = require('./routes/hobby');
const userRoutes = require('./routes/user')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());


app.use('/education', educationRoutes);
app.use('/experience', experienceRoutes);
app.use('/project', projectRoutes);
app.use('/language', languageRoutes);
app.use('/hobby', hobbyRoutes);
app.use('/user', userRoutes);


app.listen(PORT || 8000);


console.log(moment().tz(process.env.TZ).format())


