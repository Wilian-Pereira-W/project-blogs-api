const { BlogPost, User, Categorie } = require('../models');

const findAll = async (req, res) => {
  const blogPostList = await BlogPost
  .findAll({ include: [
   { model: User, as: 'user', attributes: { exclude: ['password'] } },
   { model: Categorie, as: 'categories', through: { attributes: [] } },
  ],
  });
  return res.status(200).json(blogPostList);
};

module.exports = {
  findAll,
};