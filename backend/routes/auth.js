const router = require ('express').Router();
const passport = require ('passport');
const Volunteer = require ('../models/Volunteer');
const validate = require('../helpers/validations');

router.get('/logout', validate.isAuth, (req,res)=>{
  req.logout();
  return res.status(200).json({message: 'Successfully log out'})
})

router.post('/login', validate.isLoggedIn, passport.authenticate('local'), (req,res)=>{
  res.status(200).json(req.user);
})

router.post('/signup', (req,res)=>{
  if (req.body.password !== req.body.password2){
      return res.json({message: "Passwords doesn't match"})
  }else{
    Volunteer.register(req.body, req.body.password)
    .then(volunteer=>{
      return res.status(200).json(volunteer)
    })
    .catch(()=>{
      return res.status(401).json({message: 'Email address already in use'})
    })
  }
})

module.exports = router;