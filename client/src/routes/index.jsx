import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import EditarProductos from "../pages/EditarProductos";
import { Product } from "../pages/Product";
import { ProductID } from "../pages/ProductID";





export default createBrowserRouter([
    {
        path: '/',
        element: <Layout />,

        children: [
            {
                path: 'products',
                element: <Product />
            },

            {
                path:'products/:id',
                element: <ProductID />
            },
            {
                path:'products/:id/edit',
                element: <EditarProductos />
            },
        ],

    }
]);