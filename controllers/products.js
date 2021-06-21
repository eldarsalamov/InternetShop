const Product = require('../models/Product')

const getProduct = async (req, res)=>{
  const product = await Product.find()
  res.json(product);
};

const getProductId = async (req, res)=>{
  const productId = await Product.findById(req.params.id)
  res.json(productId);
};

const  postProduct = async (req, res)=>{
  const productPost = await new Product({
    Blazers: req.body.Blazers,
    Shirts: req.body.Shirts,
    Pants: req.body.Pants,
  })
}