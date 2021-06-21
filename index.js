const express = require("express"); // подключили экспресс
const mongoose = require("mongoose"); // подключили монгуз
const indexRouter = require('./routes/index')

const app = express(); //

app.use(express.json());
app.use(express.urlencoded());
app.use(indexRouter);

mongoose
  .connect(
    "mongodb+srv://eldar:Eldar120799@cluster0.yjpa1.mongodb.net/InternetShop?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Соединения с сервером монго...");
  });

app.listen(3000, () => {
  console.log("Сервер запущен");
});
