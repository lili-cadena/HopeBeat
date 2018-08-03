const router = require ('express').Router();
const Experience = require ('../models/Experience');
const Volunteer = require ('../models/Volunteer');
const validate = require('../helpers/validations');

//Post new Experience
router.post('/new/experience', validate.isAuth, (req,res)=>{
    Experience.create(req.body)
    .then(experiences=>{
      Volunteer.findByIdAndUpdate(req.user.id, {$push:{ experiences: experiences }}, {new: true})
      .then(volunteer=>{
        return res.status(201).json(volunteer)
      })
      .catch(e=>{
        return res.status(501).json({e})
      })
    })
    .catch(()=>{
      next()
    })
})

//Get Experiences
router.get('/', validate.isAuth, (req,res)=>{
  Experience.find()
  .then(experiences =>{
    return res.status(202).json(experiences);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Experience
router.get('/:id', validate.isAuth, (req,res)=>{
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
router.put('/:id', validate.isAuth, (req,res)=>{
  Experience.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(experience=>{
      return res.status(202).json(experience)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Experience
router.delete('/:id', validate.isAuth, (req,res,next)=>{
  Experience.findByIdAndRemove(req.params.id)
  .then(experience=>{
      return res.status(202).json(experience)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;