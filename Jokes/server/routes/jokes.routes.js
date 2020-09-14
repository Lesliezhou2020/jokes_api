const JokeController = require("../controllers/jokes.controllers");
const Joke = require("../models/jokes.model");

module.exports = app => {
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/jokes/:_id", JokeController.findOneSingleJoke);
    //app.get("/api/jokes/random", );
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:_id", JokeController.updateExistingJoke);
    app.delete("/app/jokes/delete/:_id", JokeController.deleteAnExistingJoke);

}
