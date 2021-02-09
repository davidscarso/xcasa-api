export default (sequelize, DataType) => {

    const Edificios = sequelize.define('Edificios', {
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
        }
    });

    // parece que si o si hace falta esto para que no de erro
    // Edificios.associate = (models) => { }

    // belongs to: pertenece a 
    Edificios.associate = (models) => {
        Edificios.belongsTo(models.Usuarios),
            Edificios.hasMany(models.Plantas)
    };
    return Edificios;
};