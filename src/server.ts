if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

import express from 'express';
const app = express();
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index')
import mongoose from 'mongoose';


app.set('view engine', 'ejs'); // set ejs as view engine
app.set('views', __dirname+'/views');
app.set('layout','layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

mongoose.connect("mongodb://localhost/library");
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', ()=> console.log('Connected to mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000);
