const passport = require('passport');
const Volunteer = require('../models/Volunteer');
var FacebookTokenStrategy = require('passport-facebook-token');


passport.use(Volunteer.createStrategy());
passport.serializeUser(Volunteer.serializeUser());
passport.deserializeUser(Volunteer.deserializeUser());

//Estrategia Facebook

passport.use(new FacebookTokenStrategy({
    clientID: '465375830593842',
    clientSecret: '0b1f09e86b9ff99b8c31c6e0f09f5c6a'
  }, function(accessToken, refreshToken, profile, done) {
    
    Volunteer.findOne({facebookId:profile.id})
    .then(user=>{
        if(!user) return Volunteer.create({
            username: profile.displayName,
            email: profile.emails[0].value,
            photoURL: profile.photos[0].value,
            facebookId: profile.id,
        })
        return done(null, user)
    })
    .then(user=>{
        return done(null, user)
    })
    .catch(e=>next(e))
    
  }
));


module.exports = passport;