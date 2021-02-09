module.exports = app => {

    const Usuarios = app.db.models.Usuarios;

    app.get('/usuarios/:id', (req, res) => {
        // Usuarios.findById(req.params.id)...
        Usuarios
            .findByPk(req.params.id, {
                attributes: ['id', 'name', 'email']
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });

    app.post('/usuarios', (req, res) => {
        Usuarios
            .create(req.body)
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });

    app.delete('/usuarios/:id', (req, res) => {
        Usuarios
            .destroy({ where: req.params })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({ msg: error.message });
            });
    });

};