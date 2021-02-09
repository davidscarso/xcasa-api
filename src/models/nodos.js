export default (sequelize, DataType) => {

    const Nodos = sequelize.define('Nodos', {
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
        ip: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: '0.0.0.0'
        }
        // ,
        // estado1: {
        //     type: DataType.INTEGER,
        //     allowNull: false,
        //     defaultValue: 0
        // },
        // estado2: {
        //     type: DataType.INTEGER,
        //     allowNull: false,
        //     defaultValue: 0
        // }
    });

    // parece que si o si hace falta esto para que no de erro
    // Nodos.associate = (models) => { };

    // belongs to: pertenece a 
    Nodos.associate = (models) => {
        Nodos.belongsTo(models.Salas),
        Nodos.hasMany(models.Pulsadores),
        Nodos.hasMany(models.Reles)
    };

    // Users.associate = (models) => {
    //     Users.hasMany(models.Tasks);
    // };

    return Nodos;
};