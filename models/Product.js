const mongoose = require('mongoose') // подключаем библиотеку


const LothesProductSchema = new mongoose.Schema ({// одежда
  Blazers: {           // костюмы
    type:   String,
    size:   Number,
    madeIn: String,
    price:  Number,
  },
  Shirts:{ // рубашки
    type:   String,
    size:   Number,
    madeIn: String,
    price:  Number,
  },
  Pants: { //брюки
    type:   String,
    size:   Number,
    madeIn: String,
    price:  Number,
  }
});

module.exports = mongoose.model('categories' , categorySchema );