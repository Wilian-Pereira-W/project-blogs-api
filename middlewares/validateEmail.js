const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const emailFormat = /\S+@\S+\.\S+/;
  const isValid = emailFormat.test(email);
  if (!email) {
    return res.status(400).json({
        message: '"email" is required',
      }); 
  }
  if (!isValid) {
    return res.status(400).json({
        message: '"email" must be a valid email',
      }); 
  }
  next();
};

module.exports = validateEmail;