module.exports = function (app) {
    // wildcard route for 404 or 500 errors
    app.get('/*', function (req, res) {
        console.log(req.path);
        res.render('error', app.locals.pageInfo);
    });

    // production error handler
    // no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        app.locals.pageInfo.message = err.message;
        app.locals.pageInfo.error = {};
        res.render('error', app.locals.pageInfo);
    });
};