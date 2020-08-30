const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const index = require('./routes/index');
const modelRoute = require('./routes/model.routes');
const airplaneRoute = require('./routes/airplane.routes');
const anacTestRoute = require('./routes/anac_test.routes');
const syndicateRoute = require('./routes/syndicate.routes');
const employeeRoute = require('./routes/employee.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', modelRoute);
app.use('/api/', airplaneRoute);
app.use('/api/', anacTestRoute);
app.use('/api/', syndicateRoute);
app.use('/api/', employeeRoute);

module.exports = app;
