var mongoose = require('mongoose'),
    S = require('string'),
    vecrawl = require('../model/vecrawl').vecrawl,
    nodemailer = require('nodemailer'),
    destMail = 'fh.test.dummy@gmail.com',
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: destMail,
            pass: 'matrix3788'
        }
    });

module.exports = function (app, db) {    
    // handle search autocomplete
    app.get('/api/ac', function (req, res) {
        var acParam = req.param('ac');
        if (!acParam) {
            res.send({
                ac: ''
            });
        } else {
            new vecrawl.SearchAutoComplete(function (data) {
                res.send({
                    ac: data
                });
            }).autoComplete(S(acParam).escapeHTML().s);
        }
    });

    app.get('/api/search', function (req, res) {
        var searchParam = req.param('search');
        var filterParam = req.param('filterType');
        var jsonFormat = req.param('format');

        if (!searchParam)
            searchParam = '';
        if (!filterParam)
            filterParam = 'filter-web';
        if (!jsonFormat)
            jsonFormat = false;
        else
            jsonFormat = (jsonFormat == 'json');

        new vecrawl.SearchEngine(function (data) {
            if (jsonFormat) {
                res.send({
                    'data': data
                });
            } else {
                var rspObj = {
                    user: req.user,
                    appInfo: app.locals.pageInfo,
                    web: null,
                    img: null,
                    video: null,
                    none: false,
                    layout: false
                };
                
                if (data && filterParam === 'filter-img')
                    rspObj.img = data.results;
                else if (data && filterParam === 'filter-web')
                    rspObj.web = data;
                else if (data && filterParam === 'filter-video')
                    rspObj.video = data.data.items;
                else
                    none = true;

                res.render('search', rspObj);
            }

        }).search(S(searchParam).escapeHTML().s, S(filterParam).escapeHTML().s);
    });

    // contact form request
    app.post('/contact/mail', function (req, res) {
        var inputName = req.param('InputName');
        var inputEmail = req.param('InputEmail');
        var inputMessage = req.param('InputMessage');
        var mailOptions = {
            from: inputEmail, // sender address
            to: destMail, // list of receivers
            subject: 'Contact Form', // Subject line
            text: inputMessage // plaintext body
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                res.render('mail', {
                    user: req.user,
                    appInfo: app.locals.pageInfo
                });
            }
        });
    });
};
