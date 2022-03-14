const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      return res.status(409).json({ message: 'User already registered' });
    }

    const newUser = User.create({ displayName, email, password, image });

    const token = jwtGenerator({ id: newUser.id, displayName, email, image });
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = jwtGenerator({ 
      id: user.id, 
      displayName: user.displayName, 
      email, 
      imge: user.image });
      return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
};

const findAll = async (req, res) => {
  const userList = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return res.status(200).json(userList);
};

module.exports = {
  create,
  login,
  findAll,
};