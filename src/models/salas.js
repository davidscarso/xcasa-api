export default (sequelize, DataType) => {

    const Salas = sequelize.define('Salas', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        orden: {
            type: DataType.INTEGER,
            allowNull: false
        },
        nombre: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    // parece que si o si hace falta esto para que no de erro
    // Salas.associate = (models) => { }

    // belongs to: pertenece a 
    Salas.associate = (models) => {
        Salas.belongsTo(models.Plantas),
        Salas.hasMany(models.Nodos),
        Salas.hasMany(models.PulsadoresWeb)
    };

    return Salas;
};