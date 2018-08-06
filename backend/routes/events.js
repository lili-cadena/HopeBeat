const router = require ('express').Router();
const Eevent = require ('../models/Event');
const ONG = require ('../models/ONG');

//Post new Event
router.post('/ong/:id', (req,res,next)=>{
  Eevent.create(req.body)
  .then(events=>{
    return ONG.findByIdAndUpdate(req.params.id, {$push:{ events: events }}, {new: true})
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

//Get Events
router.get('/event', (req,res)=>{
  Eevent.find()
  .populate("ong")
  .then(events =>{
    return res.status(202).json(events);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Event
router.get('/event/:id', (req,res)=>{
  Eevent.findById(req.params.id)
  .populate("ong")
  .then(event =>{
    if(!event) return res.status(404)
      return res.status(202).json(event);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Event
router.put('/event/:id', (req,res)=>{
  Eevent.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .populate("ong")
  .then(event=>{
      return res.status(202).json(event)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Event
router.delete('/event/:id', (req,res,next)=>{
  Eevent.findByIdAndRemove(req.params.id)
  .populate("ong")
  .then(event=>{
      return res.status(202).json(event)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;