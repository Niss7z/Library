"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var expressLayouts = require('express-ejs-layouts');
var index_1 = __importDefault(require("./routes/index"));
var mongoose_1 = __importDefault(require("mongoose"));
app.set('view engine', 'ejs'); // set ejs as view engine
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express_1.default.static('public'));
mongoose_1.default.connect("mongodb://localhost/library");
var db = mongoose_1.default.connection;
db.on('error', function (error) { return console.error(error); });
db.once('open', function () { return console.log('Connected to mongoose'); });
app.use('/', index_1.default);
app.listen(process.env.PORT || 3000);
