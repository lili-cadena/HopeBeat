const router = require ('express').Router();
const Coomment = require ('../models/Comment');
const Eevent = require ('../models/Event');
const Post = require ('../models/Event');
const validate = require('../helpers/validations');

//Post new Comment at Event
router.post('/event/:id', validate.isAuth, (req,res)=>{
    Coomment.create(req.body, req.user.id)
    .then(comments=>{
        Eevent.findByIdAndUpdate(req.params.id, {$push:{ comments: comments }}, {new: true})
      .then(event=>{
        return res.status(201).json(event)
      })
      .catch(e=>{
        return res.status(501).json({e})
      })
    })
    .catch(()=>{
      next()
    })
})

//Post new Comment at Post
router.post('/post/:id', validate.isAuth, (req,res)=>{
    Coomment.create(req.body, req.user.id)
    .then(comments=>{
        Post.findByIdAndUpdate(req.params.id, {$push:{ comments: comments }}, {new: true})
      .then(post=>{
        return res.status(201).json(post)
      })
      .catch(e=>{
        return res.status(501).json({e})
      })
    })
    .catch(()=>{
      next()
    })
})

//Get Comments
router.get('/', (req,res)=>{
  Coomment.find()
  .then(comments =>{
    return res.status(202).json(comments);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Comment
router.get('/:id', (req,res)=>{
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
router.put('/:id', (req,res)=>{
  Coomment.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(comment=>{
      return res.status(202).json(comment)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Comment
router.delete('/:id', (req,res,next)=>{
  Coomment.findByIdAndRemove(req.params.id)
  .then(comment=>{
      return res.status(202).json(comment)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;