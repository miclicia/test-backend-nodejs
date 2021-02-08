const { response, request } = require("express")
const mongoose = require('mongoose')
const productPost = require('../models/productModel')

const getAllProducts = function (request, response) {
    productPost.find()
        .then((tasks) => { response.status(200).json(tasks) })
        .catch(err => next(err));
}

const getProductByName = (request, response) => {
    const { title } = request.query;
    productPost.find({ title: title })
        .then((posts) => { response.status(200).json(posts) })
        .then(() => response.send("Product was found!"))
        .catch(err => next(err));
}

const getProductByCategory = (request, response) => {
    const { category } = request.query;
    productPost.find({ category: category })
        .then((posts) => { response.status(200).json(posts) })
        .then(() => response.send("Product was found!"))
        .catch(err => next(err));
}

const createProduct = async (request, response, next) => {
    const { title, description, price, category } = request.body
    try {
        const newProduct = new productPost({
            title,
            description,
            price,
            category
        })
        newProduct.save()
            .then((tasks) => {
                response.status(201).json(tasks);
            })
            .then((tasks) => {
                response.send('The product was posted successfully').json(tasks);
            })
            .catch(err => next(err));
    } catch (e) {
        return response.status(401).json({ error: 'Error 401' });
    }
}


const updateProduct = (request, response) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        response.status(400).json({ message: 'ID is not valid' });
        return
    } else {
        productPost.findById(id)
            .then((task) => {
                productPost.findByIdAndUpdate(id, request.body)
                    .then(() => { response.status(200).json(`${request.params.id} was update successfully !`) })
                    .catch((err) => next(err))
            })
            .catch((err) => next(err))
    }
}

const updateProductCategory = (request, response) => {
    const { id } = request.params;
    const { title, description, price, category } = request.body
    productPost.findById(id)
        .then((task) => {
            productPost.findByIdAndUpdate(id, { $set: { category: category } })
                .then(() => { response.status(200).json({ message: `The category was changed sucessfully` }) })
                .catch((err) => next(err))

        })
        .catch(err => { throw new Errow(err) })
}

const deleteProduct = (request, response) => {
    const { id } = request.params;
    productPost.findById(id)
        .then((task) => {
            productPost.findByIdAndDelete(id)
                .then(() => { response.status(200).json({ message: `Product (id: ${id}) was deleted succesfully` }) })
                .catch((err) => next(err))
        })
        .catch(err => { throw new Errow(err) })
}

module.exports = {
    getAllProducts,
    getProductByCategory,
    getProductByName,
    createProduct,
    updateProduct,
    updateProductCategory,
    deleteProduct
}

