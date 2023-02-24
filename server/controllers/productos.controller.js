const { Productos } = require("../models/productos.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
//enviar todos los datos del producto-crear
module.exports.createProductos = async (request, response) => {
    try {
        const { titulo, descripcion, precio } = request.body;
        product = await Productos.create({
            titulo,
            descripcion,
            precio
        });
        response.json(product);
        console.log(descripcion);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

//obtener todo los productos 
module.exports.getAllProductos = async (request, response) => {
    try {
        const products = await Productos.find({})
        response.json(products);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

//obtener productos por Id
module.exports.getProductos = async (request, response) => {
    try {
        const product = await Productos.findOne({_id:request.params.id})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
    
}

//actualizar productos 
module.exports.updateProductos = async (request, response) => {
    try {
        const product = await Productos.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

//eliminar productos
module.exports.deleteProductos = async (request, response) => {
    try {
        const product = await Productos.findByIdAndDelete({ _id: request.params.id })
        response.json(product);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}