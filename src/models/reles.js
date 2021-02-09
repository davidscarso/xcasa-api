export default (sequelize, DataType) => {

    const Reles = sequelize.define('Reles', {
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

    // parece que si o si hace falta esto para que no de erro
    // Reles.associate = (models) => { };

    // belongs to: pertenece a 
    Reles.associate = (models) => {
        Reles.belongsTo(models.Nodos),
        Reles.hasMany(models.Conectores)
    };

    return Reles;
};