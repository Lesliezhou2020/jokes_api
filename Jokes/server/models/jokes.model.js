const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({

})

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;