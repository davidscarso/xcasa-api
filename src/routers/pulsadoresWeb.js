var http = require('http');

module.exports = app => {

    const PulsadoresWeb = app.db.models.PulsadoresWeb;

    app.route('/pulsadoresWeb')
        .get((req, res) => {
            PulsadoresWeb
                .findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .post((req, res) => {
            PulsadoresWeb
                .create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    // where: req.params. req.params devuelve {id:'1'} por eso no hace falta poner where: {id: req.params.id}  
    app.route('/pulsadoresWeb/:id')
        .get((req, res) => {
            PulsadoresWeb
                .findOne({ where: req.params })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .put((req, res) => {
            PulsadoresWeb
                .update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .delete((req, res) => {
            PulsadoresWeb
                .destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });
};