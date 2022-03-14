require('dotenv').config();
const express = require('express');
const { create, login, findAll } = require('./controllers/userController');
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

app.get('/user', validateToken, findAll);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
