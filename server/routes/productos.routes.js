const ProductosController = require('../controllers/productos.controller');
module.exports = function(app){
    app.get('/api', ProductosController.index);
    app.post('/api/producto', ProductosController.createProductos);
    app.get('/api/producto',ProductosController.getAllProductos);
    app.get('/api/producto/:id',ProductosController.getProductos);
    app.put('/api/producto/:id',ProductosController.updateProductos);
    app.delete('/api/producto/:id',ProductosController.deleteProductos);
}
