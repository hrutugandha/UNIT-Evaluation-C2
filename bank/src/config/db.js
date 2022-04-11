const mongoose = require("mongoose")

const connect =()=>{
    return mongoose.connect('mongodb+srv://Manney:9026724930@cluster.1o8px.mongodb.net/evals?retryWrites=true&w=majority')
}
module.exports = connect