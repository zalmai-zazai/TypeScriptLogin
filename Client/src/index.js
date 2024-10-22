'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var cors_1 = require('cors');
var db_1 = require('./db');
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.default)();
app.listen(3001, function () {
  console.log('Server is running');
});
