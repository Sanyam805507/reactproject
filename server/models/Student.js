import mongoose from "mongoose";
 const StudentSchema =mongoose.Schema({
     name : {
        type:String,
        required:true,
    },
     address : {
        type:String,
        required:true,
    },
     age : {
        type:Number,
        required:true,
    },
    email : {
        type:String,
        required:true,
    }
 });

 const StudentModel=mongoose.model('student',StudentSchema);

 export default StudentModel;