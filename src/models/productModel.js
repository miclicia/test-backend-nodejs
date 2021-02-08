const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    category: { type: String, required: true }
}, { timestamps: true });

const Product = mongoose.model('products', userSchema);

module.exports = Product;