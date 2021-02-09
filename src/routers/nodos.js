var http = require('http');

module.exports = app => {

    const Nodos = app.db.models.Nodos;

    app.route('/nodos')
        .get((req, res) => {
            Nodos
                .findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .post((req, res) => {
            Nodos
                .create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    // where: req.params. req.params devuelve {id:'1'} por eso no hace falta poner where: {id: req.params.id}  
    app.route('/nodos/:id')
        .get((req, res) => {
            Nodos
                .findOne({ where: req.params })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .put((req, res) => {
            Nodos
                .update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .delete((req, res) => {
            Nodos
                .destroy({ where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    // solo actualiza los estados, es usado por las Wemos
    app.route('/nodos/:id/estados')
        .get((req, res) => {
            Nodos
                .findOne({ where: req.params })
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

        .put((req, res) => {
            Nodos
                .update(req.body, { where: req.params })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })

    // Este metodo se usa para actualizar estado de nodos desde una app web y NO desde las Wemos
    app.route('/nodos/:id/estados/web')
        .put((req, res) => {
            Nodos
                .update(req.body, { where: req.params })
                .then(result => {

                    Nodos
                        .findOne({ where: req.params })
                        .then(result => {
                            var host = result.ip;
                            var port = '80';
                            var path = '/statusChanged';
                            var options = {
                                host: host,
                                port: port,
                                path: path,
                                method: 'GET',
                                encoding: null
                            };

                            // console.log('-> options: ', options);
                            // 192.168.0.100:80/statusChanged

                            http.get(options, (resp) => {
                                let data = '';

                                // A chunk of data has been recieved.
                                resp.on('data', (chunk) => {
                                    data += chunk;
                                });

                                // The whole response has been received. Print out the result.
                                resp.on('end', () => {
                                    // console.log(JSON.parse(data).explanation);
                                    console.info("END OK");

                                });

                            }).on("error", (err) => {
                                console.log("Error: " + err.message);
                            });


                        })
                        .catch(error => {
                            res.status(412).json({ msg: error.message });
                        });

                    res.sendStatus(204);
                })
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

            // llamda al metodo statusChanged de cada Wemos
            // para esto hay que recuperar primero la ip

        });

};