const router = require ('express').Router();
const Experience = require ('../models/Experience');
const Volunteer = require ('../models/Volunteer');

//Post new Experience
router.post('/:id', (req,res,next)=>{
  Experience.create(req.body)
  .then(experience=>{
    return Volunteer.findByIdAndUpdate(req.params.id, {$push:{ experiences: experience }}, {new: true})
    .then(volunteer=>{
      return res.status(201).json(volunteer)
    })
    .catch(e=>{
      return res.status(501).json({e})
    })
  })
  .catch(e=>{
    return res.status(401).json(e)
  })
})

//Get Experiences
router.get('/', (req,res)=>{
  Experience.find()
  .then(experiences =>{
    return res.status(202).json(experiences);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Experience
router.get('/:id', (req,res)=>{
  Experience.findById(req.params.id)
  .then(experience=>{
    if(!experience) return res.status(404)
      return res.status(202).json(experience);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Experience
router.put('/:id', (req,res)=>{
  Experience.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(experience=>{
      return res.status(202).json(experience)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Experience
router.delete('/:id', (req,res,next)=>{
  Experience.findByIdAndRemove(req.params.id)
  .then(experience=>{
      return res.status(202).json(experience)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;