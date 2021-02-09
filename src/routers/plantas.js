var http = require('http');

module.exports = app => {

    const Plantas = app.db.models.Plantas;

    app.route('/plantas')
        .get((req, res) => {
            Plantas
                .findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .post((req, res) => {
            Plantas
                .create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    // where: req.params. req.params devuelve {id:'1'} por eso no hace falta poner where: {id: req.params.id}  
    app.route('/plantas/:id')
        .get((req, res) => {
            Plantas
                .findOne({ where: req.params })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .put((req, res) => {
            Plantas
                .update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .delete((req, res) => {
            Plantas
                .destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });
};