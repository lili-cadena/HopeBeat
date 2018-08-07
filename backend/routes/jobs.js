const router = require ('express').Router();
const Job = require ('../models/Job');
const ONG = require ('../models/ONG');

//Post new Job
router.post('/job/:id', (req,res,next)=>{
  Job.create(req.body)
  .then(job=>{
    return ONG.findByIdAndUpdate(req.params.id, {$push:{ jobs: job }}, {new: true})
    .then(ong=>{
      return res.status(201).json(ong)
    })
    .catch(e=>{
      return res.status(501).json({e})
    })
  })
  .catch(e=>{
    return res.status(401).json(e)
  })
})

//Get Jobs
router.get('/job', (req,res)=>{
  Job.find()
  .populate("ong", "applicants")
  .then(jobs =>{
    return res.status(202).json(jobs);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Job
router.get('/job/:id', (req,res)=>{
  Job.findById(req.params.id)
  .populate("ong")
  .then(job=>{
    if(!job) return res.status(404)
      return res.status(202).json(job);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Job
router.put('/job/:id', (req,res)=>{
  Job.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .populate("ong")
  .then(job=>{
      return res.status(202).json(job)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Job
router.delete('/job/:id', (req,res,next)=>{
  Job.findByIdAndRemove(req.params.id)
  .populate("ong")
  .then(job=>{
      return res.status(202).json(job)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;