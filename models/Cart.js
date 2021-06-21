const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'users'
  },
  updated: {
    type: Date,
    default: Date.now
  },
  created: {
    type: Date,
    default: Date.now
  },
  products: [{
    item: {
      type:  mongoose.Types.ObjectId,
     ref: 'product'
    },
    amount: {       //количество
      type: Number,
    }
  }]
})

module.exports = mongoose.model('cart', cartSchema)