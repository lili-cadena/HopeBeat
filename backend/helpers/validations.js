
module.exports.isAuth = function (req,res,next){
    if(req.isAuthenticated()){
        next();
    }else{
        return res.redirect("/login");
    }
}
  
module.exports.isLoggedIn = function (req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/')
    }else{
        next();
    }
}
