const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/ProjectDB?retryWrites=true&w=majority")
const userSchema = new schema({
    name : {type: String,required:true},
    address:{type:String,required:true},
    phoneno :{type: Number,required:true},
    email: {type: String,required:true},
    username : {type: String,required:true},
    password : {type: String,required:true}
    
})
var register = Mongoose.model("userRegister",userSchema);
module.exports = {register}