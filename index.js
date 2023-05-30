const express = require("express");

const responseTime = require('response-time');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const connectDB = require('./src/config/db');
connectDB();


// Import route files
const userRouter = require('./src/routes/user');
const transactionsRouter = require('./src/routes/transactions');
const authRouter = require('./src/routes/auth');
// const borrowRouter = require('./src/routes/Borrowroute');



app.use(responseTime());
app.use(cors({ origin:true, credentials:true }));
app.use('/user',userRouter);
// app.use('/SlidePay/borrow',borrowRouter);
app.use('/auth',authRouter);
app.use('/transactions',transactionsRouter);


app.listen(PORT,"0.0.0.0", ()=>{
console.log(`conncted at port ${PORT}`)
});