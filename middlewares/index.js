const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validatePasswordLogin = require('./validatePasswordLogin');
const validateEmailLogin = require('./validateEmailLogin');
const validateToken = require('./validateToken');
const validateTitle = require('./validateTitle');
const validateContent = require('./validateContent');
const validateCategoryId = require('./validateCategoryId');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validatePasswordLogin,
  validateEmailLogin,
  validateToken,
  validateTitle,
  validateContent,
  validateCategoryId,
};