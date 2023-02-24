const mongoose = require('mongoose');
const ProductosSchema = new mongoose.Schema({
    titulo: { 
        type: String,
        
    },
    precio: { type: Number },
    descripcion: {type: String}
}, { timestamps: true });
module.exports.Productos = mongoose.model('Productos', ProductosSchema);

