export default (sequelize, DataType) => {
 const Affiliate = sequelize.define('affiliate',
 {
   id: {
     type: DataType.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   name: {
     type: DataType.STRING,
   }
 });
return Affiliate;
} 