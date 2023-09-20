const axios = require('axios');

exports.homepage = (req, res) => {
    // Make a get request to /api/users

    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;
  
    const fullUrl = `${protocol}://${host}:${port}${url}`
      
    const responseString = `Full URL is: ${fullUrl}`;                       
    // console.log(`${fullUrl}api/products`);

    
    axios.get(`${fullUrl}list_items`)

        .then(function(response){


            // console.log(response)
            // console.log('gggggggg' + req.flash('validationErrors'))

            res.render('index', { products : response.data , errors : req.flash('validationErrors')});
        })
        .catch(err =>{
            res.send(err);
        })
}



// exports.insert_page = (req, res) => {

//     res.render('add_item')
// }

exports.update_user = (req, res) => {

    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;
  
    const fullUrl = `${protocol}://${host}:${port}${url}`
      
    const responseString = `Full URL is: ${fullUrl}`;                       
    // console.log(`${fullUrl}api/products`);



    axios.get(`${fullUrl}/insert/items`, { params: { id: req.query.id } })
        .then(function (response) {

            res.render("index", { user: response.data })
        })
        .catch(err => {
            res.send(err);
        })
}
