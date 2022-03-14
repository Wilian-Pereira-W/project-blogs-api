require('dotenv').config();
const express = require('express');
const { create } = require('./controllers/userController');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/user', validateDisplayName, validateEmail, validatePassword, create);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
