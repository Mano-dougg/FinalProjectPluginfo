import multer from 'multer';
import { Router } from 'express';
import multerConfig from '../config/multer'
import PostProduct from '../services/productServices/postProduct/postProduct';
import DeleteProduct from '../services/productServices/deleteProduct/deleteProdutc';
import GetProducts from '../services/productServices/getProduct/getProducts';
import GetProductsName from '../services/productServices/getProduct/getProductsProperties';
import UpdateProduct from '../services/productServices/updateProduct/updateProduct';
import Cart from '../services/productServices/updateProduct/cartProducts';
import { optionalUpload } from '../config/multerOptional';


const routes = Router();    
const upload = multer(multerConfig);


// POSTS 
routes.post('/postProduct', upload.any(), (req, res) => {
    PostProduct.addProduct(req, res)
});

// GETS
routes.get('/searchProduct/all', GetProducts.getAll);
routes.get('/searchProduct/id/:id', GetProducts.byId);
routes.get('/searchProduct/name/:nomeProduto', GetProducts.byName);
routes.get('/searchProduct/letters/:lettersProduto', GetProducts.byLetters);
routes.get('/searchProduct/cart', GetProducts.cartProducts);
routes.get('/filterProducts', GetProducts.filteredProducts);
routes.get('/getProductsNames', GetProductsName.getProductsName);


// PUTS
routes.put('/editProduct/:id', upload.any(), (req, res) => {
    UpdateProduct.editProduct(req, res);
});

routes.put('/updateCart/:id', Cart.updateCartProducts);


// DELETES
routes.delete('/deleteProduct/:id', (req, res) => {
    DeleteProduct.deleteProduct(req, res);
});

export { routes };

