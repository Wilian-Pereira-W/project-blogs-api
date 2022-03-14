module.exports = (sequelize) => {
  const PostCategorie = sequelize.define('PostCategorie',
    {},
    {
      underscored: true,
      timestamps: false,
      tableName: 'PostsCategories',
    });

    PostCategorie.associate = (models) => {
      models.BlogPost.belongsToMany(
        models.Categoria,
        { foreignKey: 'postId', otherKey: 'categoryId', through: PostCategorie, as: 'categoria' },
      );

      models.Categoria.belongsToMany(
        models.BlogPost,
        { foreignKey: 'categoryId', otherKey: 'postId', through: PostCategorie, as: 'BlogPost' },
      );
    };
    return PostCategorie;
};