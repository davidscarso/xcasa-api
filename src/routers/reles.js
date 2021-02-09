var http = require('http');

module.exports = app => {

    const Reles = app.db.models.Reles;

    app.route('/reles')
        .get((req, res) => {
            Reles
                .findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .post((req, res) => {
            Reles
                .create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    // where: req.params. req.params devuelve {id:'1'} por eso no hace falta poner where: {id: req.params.id}  
    app.route('/reles/:id')
        .get((req, res) => {
            Reles
                .findOne({ where: req.params })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .put((req, res) => {
            Reles
                .update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .delete((req, res) => {
            Reles
                .destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });
};