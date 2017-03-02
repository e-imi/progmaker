'use strict';

exports.index = (req, res) => {
    res.send('hello, e-imi');
};

exports.error404 = (req, res) => res.sendStatus(404);
