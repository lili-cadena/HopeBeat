const router = require ('express').Router();
const Post = require ('../models/Post');
const ONG = require ('../models/ONG');
const validate = require('../helpers/validations');

//Post new Post
router.post('/:id', validate.isAuth, (req,res)=>{
    Post.create(req.body)
    .then(posts=>{
      ONG.findByIdAndUpdate(req.params.id, {$push:{ posts: posts }}, {new: true})
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

//Get Posts
router.get('/', validate.isAuth, (req,res)=>{
  Post.find()
  .then(posts =>{
    return res.status(202).json(posts);
  })
  .catch(e=>{
    return res.status(500).json(e)
  })
})

//Get one Post
router.get('/:id', validate.isAuth, (req,res)=>{
  Post.findById(req.params.id)
  .then(post=>{
    if(!post) return res.status(404)
      return res.status(202).json(post);
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Edit a Post
router.put('/:id', validate.isAuth, (req,res)=>{
  Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(post=>{
      return res.status(202).json(post)
  })
  .catch(e=>{
      return res.status(500).json(e)
  })
})

//Delete a Post
router.delete('/:id', validate.isAuth, (req,res,next)=>{
  Post.findByIdAndRemove(req.params.id)
  .then(post=>{
      return res.status(202).json(post)
  })
  .catch(e=>{
      return res.status(500).json({ message: 'Something went wrong'})
  })
})

module.exports = router;