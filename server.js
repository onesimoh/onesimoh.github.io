'use strict'
var express = require('express');
var app = express().use(express.static(__dirname, {'index': ['index.html']})).listen(3000);