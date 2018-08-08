const router = require ('express').Router();
const Volunteer = require ('../models/Volunteer');

//Get Volunteers
router.get('/', (req,res)=>{
  Volunteer.find()
  .then(volunteers =>{
    return res.status(202).json(volunteers);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Volunteer
router.get('/:id', (req,res)=>{
  Volunteer.findById(req.params.id)
  .populate('experiences')
  .then(volunteer=>{
    if(!volunteer) return res.status(404)
      return res.status(202).json(volunteer);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Volunteer
router.put('/:id', (req,res)=>{
  Volunteer.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(volunteer=>{
      return res.status(202).json(volunteer)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Volunteer
router.delete('/:id', (req,res)=>{
  Volunteer.findByIdAndRemove(req.params.id)
  .then(volunteer=>{
      return res.status(202).json(volunteer)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;