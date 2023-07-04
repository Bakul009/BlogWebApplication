const mongoose = require("mongoose")
mongoose.set("strictQuery", false);

const connectDatabase =async  () => {

    await mongoose.connect(process.env.MONGO_URI ,{useNewUrlParser : true})

    console.log("MongoDB Connection Successfully")

}

module.exports = connectDatabase
