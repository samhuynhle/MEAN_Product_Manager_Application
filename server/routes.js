const controller = require('./controller.js');

module.exports = (app) => {
    app.get('/express', controller.findall);
    app.get('/express/:id', controller.findone);
    app.post('/express', controller.create);
    app.put('/express/:id', controller.update);
    app.delete('/express/:id', controller.delete);
    app.get("/*", controller.reroute);
}