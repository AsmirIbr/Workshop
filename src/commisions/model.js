export default (sequelize, DataType) => {
 const Commisions = sequelize.define('commisions',
 {
   id: {
     type: DataType.STRING,
     primaryKey: true,
   },
   url: {
       type: DataType.STRING,
   },
   amount: {
       type: DataType.INTEGER,
   },
   status: {
     type: DataType.ENUM,
     values: ["Invalid payment", "Valid payment"],
   },
   discount:{
     type: Data.Type.STRING,
   }
 });
return Commisions;
} 