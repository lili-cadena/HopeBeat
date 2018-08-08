const router = require ('express').Router();
const Eevent = require ('../models/Event');
const ONG = require ('../models/ONG');

//Post new Event
router.post('/:id', (req,res,next)=>{
  req.body.owner = req.params.id
  Eevent.create(req.body)
  .then(event=>{
    return ONG.findByIdAndUpdate(req.params.id, {$push:{ events: event }}, {new: true})
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

//Get Events
router.get('/', (req,res)=>{
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
router.get('/:id', (req,res)=>{
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

//Apply event Event
router.put('/:id', (req,res)=>{
  Eevent.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(event=>{
      return res.status(202).json(event)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Event
router.delete('/:id', (req,res,next)=>{
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