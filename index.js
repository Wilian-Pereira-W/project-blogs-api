require('dotenv').config();
const express = require('express');
const { create, login, findAll, findOne } = require('./controllers/userController');
const categorieController = require('./controllers/categorieController');
const postController = require('./controllers/postController');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validatePasswordLogin,
  validateEmailLogin,
  validateToken,
  validateTitle,
  validateContent,
  validateCategoryId,
} = require('./middlewares');

const app = express();

app.use(express.json());

app.post('/login', validateEmailLogin, validatePasswordLogin, login);

app.post('/user', validateDisplayName, validateEmail, validatePassword, create);

app.post('/categories', validateToken, categorieController.create);

app.post('/post', 
  validateToken, 
  validateTitle, 
  validateContent, 
  validateCategoryId, 
  postController.create);

app.get('/post', validateToken, postController.findAll);

app.get('/categories', validateToken, categorieController.findAll);

app.get('/user', validateToken, findAll);

app.get('/user/:id', validateToken, findOne);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
