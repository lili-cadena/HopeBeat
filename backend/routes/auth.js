const router = require ('express').Router();
const passport = require ('passport');
const Volunteer = require ('../models/Volunteer');

router.post('/facebook/login', passport.authenticate('facebook-token'), (req,res)=>{
    res.json(req.user)
})

router.get('/logout', (req,res)=>{
  req.logout();
  return res.status(200).json({message: 'Successfully log out'})
})

router.post('/login', passport.authenticate('local'), (req,res)=>{
  Volunteer.findById(req.user.id)
  .populate('ongs')
  .then(volunteer => {
  return res.status(200).json(volunteer);
  })
  .catch(e=>{
  return res.status(401).json(e)
  })
  })

router.post('/signup', (req,res)=>{
  Volunteer.register(req.body, req.body.password)
  .then(volunteer=>{
    return res.status(200).json(volunteer)
  })
  .catch(e=>{
    return res.status(401).json(e)
  })
})

//Edit Volunteer Profile
router.put('/ong/:id', (req,res)=>{
  Volunteer.findByIdAndUpdate(req.user.id, req.body, {new:true})
  .then(volunteer=>{
      return res.status(202).json(volunteer)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

module.exports = router;