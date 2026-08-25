import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
//function for add product
const addProduct = async (req, res) => {
    try{
const {name, description, price, category, sizes, bestseller} = req.body;
const subCategory = req.body.subCategory || req.body.subcategory;

if (!subCategory) {
    return res.status(400).json({ success: false, message: "subCategory is required" });
}

const files = req.files || {};
const image1 = files.image1 && files.image1[0];
const image2 = files.image2 && files.image2[0];
const image3 = files.image3 && files.image3[0];
const image4 = files.image4 && files.image4[0];

const images = [image1, image2, image3, image4].filter(image => image !== undefined);
let imagesUrl=await Promise.all(
    images.map(async (image) => {
        const imageUrl = await cloudinary.uploader.upload(image.path, {
            resource_type: "image",
        });
        return imageUrl.secure_url;
    })
);
const productData = {
    name,
    description,
    price :Number(price),
    category,
    subCategory,
    sizes: parseSizes(sizes),
    bestseller:bestseller === 'true' ? true : false ,
    image: imagesUrl,
    date: Date.now()
};
const product = new productModel(productData);
await product.save();
res.json({success: true, message: "Product added successfully", data: productData})


    }
    catch (error) {
    console.log(error)
    res.json({ success: false, message: "Error adding product" });
    
    
    }
}

const parseSizes = (value) => {
    if (Array.isArray(value)) return value;
    if (typeof value !== 'string' || !value.trim()) return [];

    try {
        const parsedValue = JSON.parse(value);
        return Array.isArray(parsedValue) ? parsedValue : [parsedValue];
    } catch {
        return value.split(',').map((size) => size.trim()).filter(Boolean);
    }
};

//function for list product
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing products" });
    }   


}

//function for remove product
const removeProduct = async (req, res) => {
    try{
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Product removed successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error removing product" });
    }

}

//function for single product info
const singleProduct = async (req, res) => {
    try{
       const {productId} = req.body;
       const product = await productModel.findById(productId);
        res.json({ success: true, data: product });
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error fetching product" });
    }


}
export { addProduct, listProducts, removeProduct, singleProduct };