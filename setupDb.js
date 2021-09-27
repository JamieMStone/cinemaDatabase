const Cinema = require("./cinema");
const Movie = require("./movie");
const MovieTimes = require("./movieTimes");
const db = require("./db");

async function setupDb(){
    Movie.hasMany(MovieTimes, {
        foreignKey: "title", 
    });
    Cinema.hasMany(MovieTimes, {
        foreignKey: "location", 
    });
    await db.sync();
}

module.exports = setupDb;