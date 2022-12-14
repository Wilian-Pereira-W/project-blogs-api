const { DataTypes } = require('sequelize');

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost',
    attributes,
    {
      timestamps: false,
      tableName: 'BlogPosts',
    });

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return BlogPost;
};