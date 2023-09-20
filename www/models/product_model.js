const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please input name']
    },
    price: {
        type: Number,
        required: [true, 'Please input price']
    },
    quantity: {
        type: Number,
        required: [true, 'Please input quantity']
    },
    description: {
        type: String,
        required: [true, 'Please input description']
    }
// }
    // {
    //     timestamps: true
    })

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
