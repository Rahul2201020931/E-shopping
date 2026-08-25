import express from 'express';
import { addProduct, listProducts, removeProduct, singleProduct } from '../controllers/productController.js';
import multer from 'multer';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';


const router = express.Router();

router.post('/add',adminAuth,upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 },{ name: 'image3', maxCount: 1 },{ name: 'image4', maxCount: 1 }]), addProduct);
router.get('/list', listProducts);
router.delete('/remove', adminAuth, removeProduct);
router.get('/single', singleProduct);

export default router;