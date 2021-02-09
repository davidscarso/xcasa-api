// es un sensar que mide la temp y la humedad. 
export default (sequelize, DataType) => {

    const TempHumSensores = sequelize.define('TempHumSensores', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        gpio: {
            type: DataType.INTEGER,
            allowNull: false
        },
    });

    // belongs to: pertenece a 
    TempHumSensores.associate = (models) => {
        TempHumSensores.belongsTo(models.Nodos)

    };

    return TempHumSensores;
};