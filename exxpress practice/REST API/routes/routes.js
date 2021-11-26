const express = require('express');
const router= express.Router()
const Post = require("../Modal/post")
const app= express()


app.use((err)=>{
    console.log(`middleware is called at ${Date.now()}`)
})



router.get("/",async(req,res)=>{
    // res.send("this is Home page ")
    try{
        res.json( await Post.find())

    }
    catch(err){
        res.json({message:err})
    }
    
})


router.get("/about",(req,res)=>{
    res.send("this is about page..")
    
})


router.post("/",async(req,res)=>{
    console.log(req.body)
    try{

        const postData= await new Post({
            name:req.body.name,
            last:req.body.last,
            age:req.body.age,
            salary:req.body.salary
    
        })
        postData.save()
        res.send("successfully send")
        // res.json(postData.save())
        
    }
    catch(err){
        res.json({message:err})
    }
    

})


router.delete("/:id",async(req,res)=>{
    try{

        await Post.findByIdAndDelete(req.params.id)
        res.send("successfully delete")
    }
    catch(err){
        res.send({message:err})
    }

})


router.patch("/:id",async(req,res)=>{
    try{
        res.json(await Post.updateOne({_id:req.params.id},{$set:{name:req.body.name}}))
        // res.send("successfully update")
    }
    catch(err){
        res.send({message:err})
    }
})


module.exports= router;