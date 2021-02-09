var http = require('http');

module.exports = app => {

    const Edificios = app.db.models.Edificios;

    app.route('/edificios')
        .get((req, res) => {
            Edificios
                .findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .post((req, res) => {
            Edificios
                .create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    // where: req.params. req.params devuelve {id:'1'} por eso no hace falta poner where: {id: req.params.id}  
    app.route('/edificios/:id')
        .get((req, res) => {
            Edificios
                .findOne({ where: req.params })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .put((req, res) => {
            Edificios
                .update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .delete((req, res) => {
            Edificios
                .destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });
};