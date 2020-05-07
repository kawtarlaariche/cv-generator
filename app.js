var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');


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


app.listen(8000);
