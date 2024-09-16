const mongoose =require('mongoose');

    const connectDB= async() =>{
        try{
             await mongoose.connect('mongodb://localhost:27017/mydatabase');
                console.log('connect to mongoDb');
             
        }catch(err){
            console.error('failed to connect to mongodb'.err);
            process.exit(1);
        }
    };
module.exports=connectDB;