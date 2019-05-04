export default (sequelize, DataType) => {
    const Wire = sequelize.define("wire", {
        id:{
            type: DataType.STRING,
            primaryKey: true,
        },
        IBAN:{
            type: DataType.STRING
        },
        Swift:{
            type: DataType.STRING
        },
        accountNumber:{
            type: DataType.STRING
        },
        bankAddress:{
            type: DataType.STRING
        },
        accountHolderName:{
            type: DataType.STRING
        },
        Country:{
            type: DataType.STRING
        },
        ZipCode:{
            type: DataType.STRING 
        },
        userId: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return Wire
}