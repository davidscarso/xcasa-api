export default (sequelize, DataType) => {

    const Pulsadores = sequelize.define('Pulsadores', {
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
    Pulsadores.associate = (models) => {
        Pulsadores.belongsTo(models.Nodos),
        Pulsadores.hasMany(models.Conectores)
    };

    return Pulsadores;
};