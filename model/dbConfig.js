const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/dbtest", 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {if(!err)
        console.log("Server connected succefully");
        else console.log("Error");
        
}

)