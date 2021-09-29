const express = require('express');
const env = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors");

const app = express();

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))


env.config();

//MongoDB Connection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.vt0ll.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex : true
    }
).then(()=>{
    console.log("Database Connected");
});

//Routes
const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const cartRoutes = require('./routes/cart')

app.use(cors());
app.use('public',express.static(path.join(__dirname,'uploads')));
app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', cartRoutes);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is runing on port ${process.env.PORT}`);
});