const { Categorie } = require('../models');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    if (name === undefined) return res.status(400).json({ message: '"name" is required' });
    const categorie = await Categorie.create({ name });
    return res.status(201).json({ id: categorie.dataValues.id, name: categorie.dataValues.name });
  } catch (error) {
    console.log(error);
  }
};

const findAll = async (req, res) => {
  const userList = await Categorie.findAll();
  return res.status(200).json(userList);
};

module.exports = {
  create,
  findAll,
};