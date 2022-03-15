const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (title === undefined) {
 return res.status(400).json({
    message: '"title" is required',
  }); 
}
next();
};

module.exports = validateTitle;