/* eslint-disable linebreak-style */
import path from 'node:path';

import {Router} from 'express';
import multer from 'multer';

import { createCategory } from './app/models/useCases/categories/createCategory';
import { listCategories } from './app/models/useCases/categories/listCategories';
import { createProduct } from './app/models/useCases/products/createProduct';
import { listProducts } from './app/models/useCases/products/listProducts';

export const router = Router();

const upload = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, path.resolve(__dirname, '..', 'uploads'));
  },
});

//List categories
router.get('/categories', upload('image'), listCategories);

//Create category
router.post('/categories', createCategory);

//List products
router.get('/products', listProducts);

//Create product
router.post('/products', createProduct);

//Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('OK');
});

//List orders
router.get('/orders', (req, res) => {
  res.send('OK');
});

//Create order
router.post('/orders', (req, res) => {
  res.send('OK');
});

//Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('OK');
});

//Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('OK');
});
