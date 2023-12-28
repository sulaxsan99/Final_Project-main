const mongoose = require('mongoose');


const DbConnection = ()=>{

    mongoose.connect(process.env.Db_Uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Add the write concern options here
        // Example: Write concern 'majority' with a timeout of 1000 milliseconds
        w: 'majority',
        wtimeout: 1000,
      })
    .then((con)=>console.log(`MongoDB is connected to the host :${con.connection.host}`))
    .catch((err)=>{
        console.log(err)
    })

}

module.exports = DbConnection   