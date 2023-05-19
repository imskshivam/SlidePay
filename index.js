const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = require('./src/config/db');
connectDB();

// Import route files
const authRouter = require('./src/routes/auth');
const transactionsRouter = require('./src/routes/transactions');


 

app.use('/SlidePay/auth',authRouter);
app.use('/SlidePay/transactions',transactionsRouter);


app.listen(PORT,"0.0.0.0", ()=>{
console.log(`conncted at port ${PORT}`)
});