export default (sequelize, DataType) => {

    const Conectores = sequelize.define('Conectores', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    // belongs to: pertenece a 
    Conectores.associate = (models) => {
        Conectores.belongsTo(models.Pulsadores),
        Conectores.belongsTo(models.Reles),
        Conectores.belongsTo(models.PulsadoresWeb)
    };

    return Conectores;
};