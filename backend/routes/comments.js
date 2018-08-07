const router = require ('express').Router();
const Coomment = require ('../models/Comment');
const Eevent = require ('../models/Event');

//Post new Comment at Event
router.post('/comment/:id', (req,res,next)=>{
  Coomment.create(req.body)
  .then(comments=>{
    return Eevent.findByIdAndUpdate(req.params.id, {$push:{ comments: comments }}, {new: true})
    .then(event=>{
      return res.status(201).json(event)
    })
    .catch(e=>{
      return res.status(501).json({e})
    })
  })
  .catch(e=>{
    return res.status(401).json(e)
  })
})

//Get Comments
router.get('/comment', (req,res)=>{
  Coomment.find()
  .then(comments =>{
    return res.status(202).json(comments);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Comment
router.get('/comment/:id', (req,res)=>{
  Coomment.findById(req.params.id)
  .then(comment =>{
    if(!comment) return res.status(404)
      return res.status(202).json(comment);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Comment
router.put('/comment/:id', (req,res)=>{
  Coomment.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(comment=>{
      return res.status(202).json(comment)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Comment
router.delete('/comment/:id', (req,res,next)=>{
  Coomment.findByIdAndRemove(req.params.id)
  .then(comment=>{
      return res.status(202).json(comment)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;