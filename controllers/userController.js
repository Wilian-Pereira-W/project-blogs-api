const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    console.log(User);

  const alreadyExists = await User.findOne({ where: { email } });
  if (alreadyExists) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = User.create({ displayName, email, password, image });
  // return res.status(201).json(newUser);

  const token = jwtGenerator({ id: newUser.id, displayName, email });
  return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  create,
};