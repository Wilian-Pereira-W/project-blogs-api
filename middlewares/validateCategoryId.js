const { Categorie } = require('../models');

const validateCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds === undefined) {
    return res.status(400).json({
        message: '"categoryIds" is required',
    }); 
  }
  const alreadyExists = Categorie.findOne({ where: { id: categoryIds } });
  if (!alreadyExists) {
    return res.status(409).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = validateCategoryId;