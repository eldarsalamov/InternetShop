const Brands = require("../models/Brand");

const controllers = {
  getBrand:async (req,res) =>{
    const brand = await Brands.find()
    res.json(brand)
  },
  postBrand: async (req, res) => {
    const brand = new Brands({
      name: req.body.name,
    });
    await brand.save();
    res.json(brand);
  },
  deleteBrand: async (req, res) => {
    const brand = await Brands.findByIdAndDelete({
      _id: req.params.id,
    });
    res.json(brand);
  },
  patchBrand: async (req, res) => {
    try {
      const id = req.params.id;
      const { name } = req.body.name;
      const brand = await Brands.findByIdAndUpdate(id, { name });
      res.json(brand);
    } catch (e) {
      res.json(e);
    }
  },
};
module.exports = controllers;