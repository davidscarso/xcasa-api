export default (sequelize, DataType) => {

    const Plantas = sequelize.define('Plantas', {
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
    // Plantas.associate = (models) => { }

    // belongs to: pertenece a 
    Plantas.associate = (models) => {
        Plantas.belongsTo(models.Edificios),
            Plantas.hasMany(models.Salas)
    };

    return Plantas;
};