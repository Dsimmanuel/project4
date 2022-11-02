const Mongoose = require ("mongoose")
const schema = Mongoose.Schema;
Mongoose.connect("mongodb+srv://Immanuel:immanuel@cluster0.rnux5pm.mongodb.net/ProjectDB?retryWrites=true&w=majority")
const savingSchema = new schema({
    username : {type: String,required:true},
    date:{type:String,required:true},
    deposite :{type:String,required:true},
 
})
var save=Mongoose.model("usersaving",savingSchema)
module.exports={save}