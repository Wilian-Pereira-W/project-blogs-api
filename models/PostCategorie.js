module.exports = (sequelize) => {
  const PostCategorie = sequelize.define('PostCategorie',
    {},
    {
      timestamps: false,
      tableName: 'PostsCategories',
    });

    PostCategorie.associate = (models) => {
      models.BlogPost.belongsToMany(
        models.Categorie,
        { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategorie, as: 'categories' },
      );

      models.Categorie.belongsToMany(
        models.BlogPost,
        { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategorie, as: 'post' },
      );
    };
    return PostCategorie;
};