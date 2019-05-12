var express = require('express'),

app = express(),

mongoose = require('mongoose'),

morgan = require('morgan'),

Status = require('./api/models/status'),

Machine = require('./api/models/machine'),

bodyParser = require('body-parser'),

cors = require('cors');

config = require('./configs/'+ (process.env.NODE_ENV || "dev") + ".json");

port = config.port || 3000;

mongoose.Promise = global.Promise;

mongoose.connect(config.DBHost, { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("MongoDB Connected");
});

if(process.env.NODE_ENV !== 'test') {
  app.use(morgan('combined'));
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

let statusRoutes = require('./api/routes/status');
statusRoutes(app);

let machineRoutes = require('./api/routes/machine');
machineRoutes(app);

app.listen(port);

console.log('Machines API started on: ' + port + " using "+ process.env.NODE_ENV + " profile");

module.exports = app;