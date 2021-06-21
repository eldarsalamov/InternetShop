const Cart = require("../models/Cart");

const controllers = {
  addToCart: async (req, res) => {     // добавляем бренд
    req.body = undefined;
    const { user, product, amount } = req.body;
    let cart = await Cart.findOne({ user })
    if(cart) {
      let cartIndex = cart.products.findIndex(item => {  // найти индекс
        return item.item.toString() === product    // возвращаем продукт
      })
      if(cartIndex !== -1) {     //если данный индекс не равен -1
        cart.products[cartIndex].amount += amount    // обращаемся к ключу amount и прибавляем значение
      } else {
        //в данный документ с продуктами добавляем еще 1 элемент с количество
        cart.products.push( { item: product, amount: amount, })
      }
      await cart.save()
      res.json(cart)
    } else {
      //если нет продукта в корзине добавляем 1
      const addToCart = await new Cart({
        user,
        products: [
          {
            item: product,
            amount: amount,
          },
        ],
      });
      await addToCart.save()
      res.json(addToCart);
    }
  },
  deleteCart: async (req, res) => {
    const deleteCart = await Cart.findByIdAndDelete({ _id: req.params.id });
    res.json(deleteCart);
  },
};

module.exports = controllers;