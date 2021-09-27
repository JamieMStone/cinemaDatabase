const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Cinema extends Model {}


Cinema.init(
    {
        location: DataTypes.STRING,
        screens: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: "Cinema",
        timestamps: false,
    }
);


module.exports = Cinema;