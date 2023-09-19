const Product = require('../models/product_model');

//Get all items
const get_all_items = (async (req, res) => {


    try {
      
            const products = await Product.find({});

            console.log(products);
            // res.status(200).json(products);
            // res.json({ status:'200' , message:'success' , data: products});
            return res.status(200).json({
                status:200,
                message: 'OK',
                data: products
            })
       
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

// Insert item data
const insert_item = (async(req, res) => {

    console.log(req.body);

    try {
        const product = await Product.create(req.body)

        // res.status(200).json(product);
        // res.json({ status:'200' , message:'Insert item success!'});
        // res.send({status: 200,success: 'OK',data :product});
        return res.status(200).json({
            status:200,
            message: 'OK'
        })
       
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
})

// Get get_item_by_id
const get_item_by_id = (async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        // res.status(200).json(product);
        return res.status(200).json({
            status:200,
            message: 'OK',
            data: product
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Update item data
const update_item = (async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            return res.status(404).json({ message: `cannot find any product with ID ${id}` })
        }
        const updatedProduct = await Product.findById(id);
        // res.status(200).json(updatedProduct);
        // res.json({ status:'200' , message:'Update item success!'});
        return res.status(200).json({
            status:200,
            message: 'OK'
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Delete item data
const delete_item = (async (req, res) => {

    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `cannot find any product with ID ${id}` })
        }
        // res.status(200).json(product);
        return res.status(200).json({
            status:200,
            message: 'Delete item success!'
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = {
    get_all_items,
    insert_item,
    update_item,
    delete_item,
    get_item_by_id
}