const express = require('express')
// Configuring the database
const dbConfig = require('./configs/database');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes')
const app = express()

app.use(express.json())


console.log(dbConfig.url);

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");

    //listen to the port
    app.listen(3000, () => {
        console.log(`Server is running on port 3000 ...`);
    });

}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// product routes
app.use('/api/products',productRoutes);


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})









