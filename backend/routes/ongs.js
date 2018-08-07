const router = require ('express').Router();
const ONG = require ('../models/ONG');
const Volunteer = require ('../models/Volunteer');

function isAuth(req,res,next){
  if(req.isAuthenticated()){
    return next()
  }
  console.log("Not log in")
  res.send("You shall not pass")
}

//Post new ONG
router.post('/', isAuth, (req,res)=>{
  req.body.owner = req.user._id
  ONG.create(req.body)
  .then(ong=>{
    return Volunteer.findByIdAndUpdate(req.user._id, {$push:{ ongs: ong._id }}, {new: true})
    //req.user.ongs.push(ong._id)
   // return req.user.save()
    .then(volunteer=>{
      return res.status(202).json(volunteer)
    })
    .catch(e=>{
      return res.status(500).json(e)
    })
  })
  .catch(e=>{
    return res.status(401).json(e)
  })
})

//Get all ONGs
router.get('/', (req,res)=>{
  ONG.find()
  .then(ongs =>{
    return res.status(202).json(ongs);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one ONG
router.get('/:id', (req,res)=>{
  ONG.findById(req.params.id)
  .populate('events')
  .then(ong=>{
    if(!ong) return res.status(404)
      return res.status(202).json(ong);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a ONG
router.put('/:id', (req,res)=>{
  ONG.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(ong=>{
      return res.status(202).json(ong)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a ONG
router.delete('/:id', (req,res,next)=>{
  ONG.findByIdAndRemove(req.params.id)
  .then(ong=>{
      return res.status(202).json(ong)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;