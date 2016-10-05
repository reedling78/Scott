/*jslint nomen: true */
/*globals window, document, define, $, _, console, Modernizr, alert*/

var express = require('express'),
    app = require('express')(),
    server = require('http').Server(app),
    cons = require('consolidate');

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.engine('html', cons.handlebars);

app.get('/', function (req, res) {
    'use strict';
    res.render('default.html', {
        scott: 'dork'

    });
});

server.listen(3000);