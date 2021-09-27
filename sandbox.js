const sequelize = require("./db");
const Cinema = require("./cinema");
const Movie = require("./movie");
const MovieTimes = require("./movieTimes");
const setupDb = require("./setupDb");

async function sandbox(){
    await setupDb();
    const city = await Cinema.create({
        location: "City of London",
        screens: "13",
    });
    const Farringdon = await Cinema.create({
        location: "Farringdon",
        screens: "7",
    });
    const Holborn = await Cinema.create({
        location: "Holborn",
        screens: "8",
    });
    const Westminister = await Cinema.create({
        location: "Westminister",
        screens: "10",
    });

    const ShangChi = await Movie.create({
        title: "Shang-Chi",
        duration: 132,
    });

    const FreeGuy = await Movie.create({
        title: "Free Guy",
        duration: 115,
    });

    const JamesBond = await Movie.create({
        title: "No Time To Die",
        duration: 165,
    });

    const SuicideSquad = await Movie.create({
        title: "The Suicide Squad",
        duration: 132,
    });

    const screeningOne = await ShangChi.createMovieTime({
        startTime: "11:00",
        location: 4,
    });

    const screeningTwo = await ShangChi.createMovieTime({
        startTime: "18:00",
        location: 2,
    });

    const screeningThree = await FreeGuy.createMovieTime({
        startTime: "20:00",
        location: 3,
    })

    const screeningFour = await SuicideSquad.createMovieTime({
        startTime: "19:30",
        location: 1,
    });

}

sandbox();