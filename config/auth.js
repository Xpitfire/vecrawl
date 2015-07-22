// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {
    
    'facebookAuth' : {
        'clientID' 		: '752925494796334', // your App ID
        'clientSecret' 	: '3fdbfbc0f272e64fca958a2282a62023', // your App Secret
        'callbackURL' 	: 'http://vecrawl-xpitfire.rhcloud.com/auth/facebook/callback'
    },
    
    'twitterAuth' : {
        'consumerKey' 		: 'your-consumer-key-here',
        'consumerSecret' 	: 'your-client-secret-here',
        'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
    },
    
    'googleAuth' : {
        'clientID' 		: 'your-secret-clientID-here',
        'clientSecret' 	: 'your-client-secret-here',
        'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
    }

};