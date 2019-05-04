export default (sequelize, DataType) => {
    const Payoneer = sequelize.define("payoneer", {
        id:{
            type: DataType.STRING,
            primaryKey: true
        },
        email: {
            type: DataType.STRING
        },
        userId: {
            type: DataType.STRING,
            allowNull: false
        }
    })
}