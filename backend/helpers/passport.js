const passport = require('passport');
const Volunteer = require('../models/Volunteer');

passport.use(Volunteer.createStrategy());
passport.serializeUser(Volunteer.serializeUser());
passport.deserializeUser(Volunteer.deserializeUser());

module.exports = passport;