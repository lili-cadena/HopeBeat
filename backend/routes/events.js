const router = require ('express').Router();
const Eevent = require ('../models/Event');
const ONG = require ('../models/ONG');
const validate = require('../helpers/validations');

//Post new Event
router.post('/:id', validate.isAuth, (req,res)=>{
    Eevent.create(req.body)
    .then(events=>{
      ONG.findByIdAndUpdate(req.params.id, {$push:{ events: events }}, {new: true})
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
router.get('/', validate.isAuth, (req,res)=>{
  Eevent.find()
  .then(events =>{
    return res.status(202).json(events);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Experience
router.get('/:id', validate.isAuth,(req,res)=>{
  Eevent.findById(req.params.id)
  .then(event =>{
    if(!event) return res.status(404)
      return res.status(202).json(event);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Experience
router.put('/:id', validate.isAuth, (req,res)=>{
  Eevent.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(event=>{
      return res.status(202).json(event)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Experience
router.delete('/:id', validate.isAuth, (req,res,next)=>{
  Eevent.findByIdAndRemove(req.params.id)
  .then(event=>{
      return res.status(202).json(event)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;