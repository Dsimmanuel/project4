const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/ProjectDB?retryWrites=true&w=majority")
const requestSchema = new schema({
    name:{type: String,required:true},
    income:{type: String,required:true},
    aadhar:{type: String,required:true},
    pan:{type: String,required:true},
    account:{type: String,required:true},
    ifsc:{type: String,required:true}
})
var apply=Mongoose.model("applyloan",requestSchema)
module.exports={apply}
