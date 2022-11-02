const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/ProjectDB?retryWrites=true&w=majority")
const loanSchema = new schema({
    loanid : {type: String,required:true},
    loanName:{type:String,required:true},
    loanPlan :{type:String,required:true},
    amount: {type: Number,required:true},
    interest:{type:String,required:true}
})
var loan=Mongoose.model("userloan",loanSchema)
module.exports={loan}