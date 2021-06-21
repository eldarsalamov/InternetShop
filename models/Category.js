const mongoose = require('mongoose') // подключаем библиотеку

const categorySchema = new mongoose.Schema({ // под каждую категорию даем ключ
  clothes: {
    type: String,

  },
  footwear: {  // обувь клю для категории age
    type: String, // строковый тип для age
  },
  accessories : {
    type: String,
  },
});

module.exports = mongoose.model('categories' , categorySchema);