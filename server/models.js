const mongoose = require('mongoose');
//We are using mongoose as the framework between Express and MongoDB

mongoose.connect('mongodb://localhost/productsdb', {useNewUrlParser: true})
//We are connecting our Express server to MongoDB

var ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product must have a title!"],
        minlength: [4, "Product title must be at least 4 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Product must have a price!"],
        min: [0.01, "Product must be greater than 0.01!"]
    },
    image_url: {
        type: String,
        default: "https://www.modvellumclinical.com/wp-content/uploads/no-product-image.png"
    }
}, {timestamps: true});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;