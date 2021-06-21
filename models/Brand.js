const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({   // схема бренда
  name: {
    type: String,

  },
  createdAt: {        // создано
    type: Date,
    default: Date.now,   //Возвращаем числовое значение, соответствующее текущему времени
  },
  updatedAt: {          //обновлено
    type: Date,
    default: Date.now,   //Возвращаем числовое значение соответствующее текущему времени
  },
});
module.exports = mongoose.model("brand", brandSchema);