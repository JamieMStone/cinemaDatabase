const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class MovieTimes extends Model{}

MovieTimes.init(
    {
        startTime: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: "movieTimes",
        timestamps: false,
    }
);

module.exports = MovieTimes;