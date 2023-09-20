const flash = require('flash');
const Product = require('../models/product_model');


//Get all items
const get_item = (req, res) => {

    if (req.query.id) {
        const id = req.query.id;

        Product.findById(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: "Not found user with id " + id })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving product with id " + id })
            })

    } else {
        Product.find()
            .then(item => {
                res.send(item)
            })
            .catch(err => {
                res.status(500).send({ message: err.message || "Error Occurred while retriving user information" })
            })
    }

}

// Insert item data
const insert_item = ((req, res) => {

    // console.log(req.body)

    Product.create(req.body).then(() => {
        console.log("item already add")
        res.redirect('/');
    }).catch((error) => {
        // console.log(error.errors)
        if (error) {
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)

            // console.log(validationErrors)

            req.flash('validationErrors', validationErrors)
            req.flash('data', req.body)
            return res.redirect('/')
        }
    })
})

// Update item data
const update_item = (async (req, res) => {

    console.log(req.body.productId)

    

    if (!req.body) {
        return res
            .status(400)
            .send({ message: "Data to update can not be empty" })
    }

    const id = req.body.productId;

    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` })
            } else {
                // res.send(data)
                console.log("item already update")
                res.redirect('/');
            }
        })
        .catch(err => {
            res.status(500).send({ message: "Error Update user information" })
        })
})

// Delete item data
const delete_item = (async (req, res) => {

    console.log(req.body.productId)

    const id = req.body.productId;

    Product.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{

                res.redirect('/');

                // res.send({
                //     message : "User was deleted successfully!"
                // })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
})



module.exports = {
    get_item,
    insert_item,
    update_item,
    delete_item
}