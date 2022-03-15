const { Categorie } = require('../models');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    if (name === undefined) return res.status(400).json({ message: '"name" is required' });
    console.log('name:::::::', name);
    const categorie = await Categorie.create({ name });
    console.log('categorie::', categorie.dataValues.name);
    return res.status(201).json({ id: categorie.dataValues.id, name: categorie.dataValues.name });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
};