const router = require ('express').Router();
const Job = require ('../models/Job');
const ONG = require ('../models/ONG');
const validate = require('../helpers/validations');

//Post new Job
router.post('/:id', validate.isAuth, (req,res)=>{
    Job.create(req.body)
    .then(jobs=>{
      ONG.findByIdAndUpdate(req.params.id, {$push:{ jobs: jobs }}, {new: true})
      .then(ong=>{
        return res.status(201).json(ong)
      })
      .catch(e=>{
        return res.status(501).json({e})
      })
    })
    .catch(()=>{
      next()
    })
})

//Get Jobs
router.get('/', validate.isAuth, (req,res)=>{
  Job.find()
  .then(jobs =>{
    return res.status(202).json(jobs);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Job
router.get('/:id', validate.isAuth, (req,res)=>{
  Job.findById(req.params.id)
  .then(job=>{
    if(!job) return res.status(404)
      return res.status(202).json(job);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Job
router.put('/:id', validate.isAuth, (req,res)=>{
  Job.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(job=>{
      return res.status(202).json(job)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Job
router.delete('/:id', validate.isAuth, (req,res,next)=>{
  Job.findByIdAndRemove(req.params.id)
  .then(job=>{
      return res.status(202).json(job)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;