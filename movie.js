const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Movie extends Model{}

Movie.init(
    {
        title: DataTypes.STRING,
        duration: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "movie",
        timestamps: false,
    }
);

module.exports = Movie;

