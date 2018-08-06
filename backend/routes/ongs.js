const router = require ('express').Router();
const ONG = require ('../models/ONG');
const Volunteer = require ('../models/Volunteer');

//Post new ONG
router.post('/search', (req,res,next)=>{
  ONG.create(req.body)
  .then(ong=>{
    return Volunteer.findByIdAndUpdate(req.user.id, {$push:{ ongs: ong }}, {new: true})
    .then(volunteer=>{
      return res.status(202).json(volunteer)
    })
    .catch(e=>{
      return res.status(500).json(e)
    })
  })
  .catch(()=>{
    next()
  })
})

//Get all ONGs
router.get('/ong', (req,res)=>{
  ONG.find()
  .then(ongs =>{
    return res.status(202).json(ongs);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one ONG
router.get('/ong/:id', (req,res)=>{
  ONG.findById(req.params.id)
  .then(ong=>{
    if(!ong) return res.status(404)
      return res.status(202).json(ong);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a ONG
router.put('/ong/:id', (req,res)=>{
  ONG.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(ong=>{
      return res.status(202).json(ong)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a ONG
router.delete('/ong/:id', (req,res,next)=>{
  ONG.findByIdAndRemove(req.params.id)
  .then(ong=>{
      return res.status(202).json(ong)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;