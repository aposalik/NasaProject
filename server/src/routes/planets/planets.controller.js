const {habitablePlanets} = require("../../module/planet.model")

function getAllPlanets(req, res){
    return res.status(200).json(planet);
}

module.exports = {
    getAllPlanets,
};