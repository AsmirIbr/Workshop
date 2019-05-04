export default (sequelize, DataType) => {
 const Commisions = sequelize.define('commisions',
 {
   id: {
     type: DataType.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   commision: {
     type: DataType.INTEGER,
   },
   url: {
       type: DataType.STRING,
   },
   amount: {
       type: DataType.INTEGER,
   },
 });
return Commisions;
} 