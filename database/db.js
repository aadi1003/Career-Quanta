import mongoose from "mongoose"

const dbCoonnection=async ()=>{
    const DB_URI=`mongodb+srv://aditya10wani:jayant27@job-portal.vfzxs76.mongodb.net/`;
    try{
       await mongoose.connect(DB_URI,{useUnifiedTopology:true})
       console.log('Database connected successfully');
    }catch(error){
        console.log("Error while connecting with database" ,error.message)
    }
}

export default dbCoonnection;


// import mongoose from "mongoose";

// const DBConnection = async () => {

//     const MONGO_URI = `mongodb+srv://aditya10wani:jayant27@job-portal.vfzxs76.mongodb.net/`;
//     try {
//         await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.log('Error while connecting with the database ', error.message);
//     }
// }

// export default DBConnection;