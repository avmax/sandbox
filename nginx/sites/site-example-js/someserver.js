const setup = {port:4500}
  // Подключаем express
  const express = require ('express'); 
  // создаем приложение
  const app = express ();

  app.get('/', (req, res) => {    
    res.send('Hey! site-example-js'); 
  });

  // Маршрутизируем GET-запрос http://ваш_сайт/test
  app.get('/test', (req, res) => {    
    res.send('Тест'); 
  });
  // Слушаем порт и при запуске сервера сообщаем
  app.listen(setup.port, () => {
    console.log('Сервер: порт %s - старт!', setup.port);
  });
