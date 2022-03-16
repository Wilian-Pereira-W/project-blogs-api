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

const findOne = async (req, res) => {
  const { id } = req.params;
  console.log('id::', id);
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
     ],
  });
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  console.log(post);
  return res.status(200).json(post);
};

module.exports = {
  findAll,
  findOne,
};