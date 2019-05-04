import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Affiliate: connection.import('../affiliate/model'),
  User: connection.import('../user/model'),
  Commisions: connection.import('../commisions/model'),
  PayPal: connection.import('../paypal/model'),
  Payoneer: connection.import('../payoneer/model'),
  Wire: connection.import('../wire/model'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

//Relations
models.User.belongsTo(models.Affiliate);  
models.Affiliate.hasMany(models.User);  
models.PayPal.belongsTo(models.User);  
models.Wire.belongsTo(models.User);  
models.Payoneer.belongsTo(models.User);  
models.Commisions.belongsTo(models.Affiliate);

models.connection = connection;
models.Sequelize = Sequelize;

export default models;