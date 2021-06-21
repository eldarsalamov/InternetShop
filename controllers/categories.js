const  Category = require('../models/Category'); //  создаем константу, и подключаем путь к моделям

const getCotegory = async (req, res)=>{ // созд. гетт запрос  (async) делает запрос ассинхрронной
const category  = await Category.find() // создаем функцию, await делает фнкц ассинхронной, которая вазврашает метод файнд
  res.json(category);
};

const  getCategoryId = async (req, res)=>{
  const categoryId = await  Category.findById()
  res.json(categoryId);
};

const postCategory = async (req, res)=>{ //создаем пост запрос асинхронный
  const categoryPost =await new Category({ // добавляем в модели новую категорию
    clothes: req.body.clothes, // добавить в тело кашелек
    footwear: req.body.footwear,// добавить в тело Обувь
    accessories: req.body.accessories, // добавить в тело аксессуары
  })
  };
categories.save() // сохранить новую модель
res.send('добавлен') // и вывести на экран текст добавлен
