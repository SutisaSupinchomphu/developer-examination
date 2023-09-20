const express = require('express')
const expressSession = require('express-session')
const dbConfig  = require('./configs/database')
const mongoose = require('mongoose')
const routes = require('./routes/app_routes')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const flash = require('flash')
const path = require('path');
const app = express()
app.use(express.static("assets"))
// log requests
app.use(morgan('tiny'));
// parse request to body-parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressSession({
    secret: "node secret",
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

dotenv.config( { path : '.env'} )
const PORT = process.env.PORT || 3000


// mongodb connection
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");

}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


// load routers
app.use('/',routes);

// app.get('/add-new-item',ItemIndex)

//creating form
// app.get("/",function(req,res){
//     res.send('get successful')
// });

// app.post("/user/register",function(req,res){


//     console.log(req.body)

// });


// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
app.use('/fonts', express.static(path.resolve(__dirname, "assets/fonts")))



//listen to the port
app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} ...`);
});


// app.get('/',function(req,res){
//     // res.sendFile(path.join(__dirname+'/views/index.html'));
//     // res.render('index')
// });
