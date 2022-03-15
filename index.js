require('dotenv').config();
const express = require('express');
const { create, login, findAll, findOne } = require('./controllers/userController');
const categorieController = require('./controllers/categorieController');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validatePasswordLogin,
  validateEmailLogin,
  validateToken,
} = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', validateEmailLogin, validatePasswordLogin, login);

app.post('/user', validateDisplayName, validateEmail, validatePassword, create);

app.post('/categories', validateToken, categorieController.create);

app.get('/user', validateToken, findAll);

app.get('/user/:id', validateToken, findOne);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
