var vecrawl = require('../model/vecrawl').vecrawl,
    S = require('string');

module.exports = function (app) {

    // search area
    app.get('/', function (req, res) {
        var searchParam = req.param('search');
        var filterParam = req.param('filterType');
        if (!searchParam) {
            res.render('index', {
                layout: 'startpage',
                user: req.user,
                appInfo: app.locals.pageInfo
            });
        } else {
            if (!filterParam)
                filterParam = 'filter-web';
            new vecrawl.SearchEngine(function (data) {
                var rspObj = {
                    user: req.user,
                    appInfo: app.locals.pageInfo,
                    web: null,
                    img: null,
                    video: null,
                    none: false
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
            }).search(S(searchParam).escapeHTML().s, S(filterParam).escapeHTML().s);
        }
    });

    // support area
    app.get('/support', function (req, res) {
        res.render('support', {
            user: req.user,
            appInfo: app.locals.pageInfo
        });
    });

    // about area
    app.get('/about', function (req, res) {
        res.render('about', {
            user: req.user,
            appInfo: app.locals.pageInfo
        });
    });
    
    // contact area
    app.get('/contact', function (req, res) {
        res.render('contact', {
            user: req.user,
            appInfo: app.locals.pageInfo
        });
    });
            
};