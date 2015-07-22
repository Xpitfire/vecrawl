﻿module.exports = function (app, passport) {
    
    // show the auth page
    app.get('/auth', function (req, res) {
        res.render('auth');
    });

    // PROFILE SECTION =========================
    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile', {
            user: req.user,
            appInfo: app.locals.pageInfo
        });
    });
    
    // SETTINGS SECTION =========================
    app.get('/settings', isLoggedIn, function (req, res) {
        res.render('settings', {
            user: req.user,
            appInfo: app.locals.pageInfo
        });
    });
    
    // LOGOUT ==============================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });

    // =============================================================================
    // AUTHENTICATE (FIRST LOGIN) ==================================================
    // =============================================================================
    
    // locally --------------------------------
    // LOGIN ===============================
    // show the login form
    app.get('/login', function (req, res) {
        console.log('login = ' + req.flash('loginMessage'));
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });
    
    // process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    
    // SIGNUP =================================
    // show the signup form
    app.get('/signup', function (req, res) {
        res.render('signup', { message: req.flash('signupMessage') });
    });
    
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    
    // facebook -------------------------------
    
    // send to facebook to do the authentication
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
    
    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback',
			passport.authenticate('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/auth'
    }));
    
    // twitter --------------------------------
    
    // send to twitter to do the authentication
    app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));
    
    // handle the callback after twitter has authenticated the user
    app.get('/auth/twitter/callback',
			passport.authenticate('twitter', {
        successRedirect : '/profile',
        failureRedirect : '/auth'
    }));
    
    
    // google ---------------------------------
    
    // send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    
    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
			passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/auth'
    }));
    
    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================
    
    // locally --------------------------------
    app.get('/connect/local', function (req, res) {
        res.render('connect-local', { message: req.flash('loginMessage') });
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
    
    // facebook -------------------------------
    
    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));
    
    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
			passport.authorize('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/auth'
    }));
    
    // twitter --------------------------------
    
    // send to twitter to do the authentication
    app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));
    
    // handle the callback after twitter has authorized the user
    app.get('/connect/twitter/callback',
			passport.authorize('twitter', {
        successRedirect : '/profile',
        failureRedirect : '/auth'
    }));
    
    
    // google ---------------------------------
    
    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));
    
    // the callback after google has authorized the user
    app.get('/connect/google/callback',
			passport.authorize('google', {
        successRedirect : '/profile',
        failureRedirect : '/auth'
    }));
    
    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future
    
    // local -----------------------------------
    app.get('/unlink/local', isLoggedIn, function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });
    
    // facebook -------------------------------
    app.get('/unlink/facebook', isLoggedIn, function (req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });
    
    // twitter --------------------------------
    app.get('/unlink/twitter', isLoggedIn, function (req, res) {
        var user = req.user;
        user.twitter.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });
    
    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function (req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

};

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/auth');
}