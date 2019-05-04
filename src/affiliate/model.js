export default (sequelize, DataType) => {
 const Affiliate = sequelize.define('affiliate',
 {
   id: {
     type: DataType.STRING,
     primaryKey: true,
   },
   name: {
     type: DataType.STRING,
   }
 });
return Affiliate;
} 