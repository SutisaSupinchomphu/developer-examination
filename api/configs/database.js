require('dotenv').config();

// console.log(process.env);

module.exports = {
    // url: `mongodb+srv://api_recruit:As4TapTe768DOS68@recruitment.bqq01kq.mongodb.net/?retryWrites=true&w=majority`
    url: `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@recruitment.bqq01kq.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
};

