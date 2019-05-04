export default (sequelize, DataType) => {
    const PayPal = sequelize.define("paypal", {
        id: {
            type: DataType.STRING,
            primaryKey: true
        },
        PayPal: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING
        },
        userId: {
            type: DataType.STRING,
            allowNull: false
        }
    });
    return PayPal
}