const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {register}=require("./src/model/userSchema")
const { loan } = require("./src/model/loanSchema")
const { apply } = require("./src/model/requestSchema")
const { save } = require("./src/model/savingSchema")
const { apr } = require("./src/model/approve")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use (Bodyparser.json())





app.get("/",(req,res)=>{
    res.render("register")
})

app.get("/home",(req,res)=>{
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/register",(req,res)=>{
    
    
    register.findOne({
        username: req.body.username
      },(error, data) => {
        if (error) {
          console.log(error)
          res.status(500).send({ message: err });
          return;
        }
    
        if (data) {
          res.send({ message: "Failed! Username is already in use!" });
          return;
        }else{
            register.findOne({
            email: req.body.email
          },(error, data) => {
            if (error) {
              console.log(error)
              res.status(500).send({ message: err });
              return;
            }
        
            if (data) {
              res.send({ message: "Failed! Email is already in use!" });
              return;
            }else{
            const data=req.body
            const ob=new register(data)
            ob.save(
                (error,data)=>{
                if(error){
                    
                    res.send(error)
                }
                else{
                  
                    res.send(data)
                }
        })
        
    }
})
}
})
})

app.delete('/delete/:id',function(req,res){
    const id = req.params.id;
    register.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})

  app.put('/update/:id',function(req,res){
    
    const id = req.params.id,
    userId=req.body.userId,
    userName=req.body.userName,
    email=req.body.email,
    phoneNo=req.body.phoneNo
 


    register.findByIdAndUpdate({"_id":id},
    {$set:{"userId":userId,
    "userName":userName,
    "email":email,
    "phoneNo":phoneNo
    
}}).then(function(){
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })




//loan details


app.get("/manage",(req,res)=>{
    loan.find(
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
        
            }
            else{
                res.send(data)
                console.log(data)
            }
        }
    )
})

app.post("/addloan",(req,res)=>{
    
    const data=req.body
    console.log(data)
    const ob=new loan(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/deleteloan/:id',function(req,res){
    const id = req.params.id;
    loan.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})


app.put('/updateloan/:id',function(req,res){
    
    const id = req.params.id,
    loanid=req.body.loanid,
    loanName=req.body.loanName,
    loanPlan=req.body.loanPlan,
    interest=req.body.interest,
    amount=req.body.amount

    loan.findByIdAndUpdate({"_id":id},
    {$set:{"loanid":loanid,
    "loanName":loanName,
    "loanPlan":loanPlan,
    "interest":interest,
    "amount":amount

}}).then(function(){
    loan.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })

//apply loan
app.get("/foradmin",(req,res)=>{
    apply.find(
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
        
            }
            else{
                res.send(data)
                console.log(data)
            }
        }
    )
})
app.post("/forloan",(req,res)=>{
    
    const data=req.body
    console.log(data)
    const ob=new apply(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})
  
//savings
app.post("/saving",(req,res)=>{
    
    const data=req.body
    console.log(data)
    const ob=new save(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})



app.post("/money",(req,res)=>{
    
    console.log(req.body)
   
    save.findOne({username:req.body.username},
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            if(data){
                res.send(data)
                console.log(data)
            }
            else{
                return
            }
        })
})

app.get("/seen",(req,res)=>{
    save.find(
        (error,data)=>{
            if(error){
                res.send(error)
                console.log(error)
        
            }
            else{
                res.send(data)
                console.log(data)
            }
        }
    )
})
app.post("/ulogin", async(req, res)=>{
    const request=req.body
    register.findOne({username:request.username}, (err,register)=>{
        if(register){
            if(register.password==request.password){
                res.send({"success":true, register: register});
            }else{
                res.send({"success":"Invalid Username or Password"});
            }
        }else{
            res.send({"success":"no user found!"});
        }
    })
 }) 
//request
app.get("/viewrequest",(req,res)=>(
    request.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else(
                res.send(data)
            )
        }
    )
))

//approved

app.get("/home",(req,res)=>{
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/register",(req,res)=>{
    const data=req.body
    data.role="student"
    console.log(data)
    const ob=new register(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
            }
        }
    )
})


app.post("/approveloan",(req,res)=>{
    const data=req.body
    data.role="student"
    console.log(data)
    const ob=new apr(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
                return
            }
            else{
                res.send(data)
                console.log(data)
                console.log("uploaded")
            }
        }
    )
})


app.delete('/rejectloan/:id',function(req,res){
    const id = req.params.id;
    apply.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        console.log("delete")
        res.status(200).json({
            msg:data
        })
       }
    })
})


app.listen(3000,()=>{
    console.log("Successfully running on http://localhost:3000")
})