export default (sequelize, DataType) => {

    const PulsadoresWeb = sequelize.define('PulsadoresWeb', {
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

    // belongs to: pertenece a 
    PulsadoresWeb.associate = (models) => {
        PulsadoresWeb.belongsTo(models.Salas),
        PulsadoresWeb.hasMany(models.Conectores)
    };

    return PulsadoresWeb;
};