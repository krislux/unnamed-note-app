const controller = require('../config/helpers').controller;

module.exports = app => {
    app.get('/api/', (req, res) => {
        res.send("API doc");
    });

    app.get('/api/projects', controller('projects'));
    app.get('/api/organizations', controller('organizations'));
}
