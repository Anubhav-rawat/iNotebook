const mongoose = require('mongoose');


const mongURI = "mongodb://0.0.0.0:27017/inotebook?tls=false&readPreference=primary"
async function connectToMongo  (){

    mongoose.connect(mongURI).then(
        () => { /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    console.log("connected bro");
       },
        err => { /** handle initial connection error */
        console.log(err);
     }
      );
// mongoose.connect(mongURI);
}
module.exports = connectToMongo;