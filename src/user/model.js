export default (sequelize, DataType) => {
  const User = sequelize.define(
    'user', {
    id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      validate: {
        isEmail: true,
        msg: 'Invalid email'
      }
    },
    username: {
      type: DataType.STRING,
      validate: {
        isAlphanumeric: true,
      }
    },
    password: {
      type: DataType.STRING,
    },
    affiliateId: {
        type: DataType.STRING,
        allowNull: false,
    },
  });
  return User;
};