const CountriesRouter = require("express").Router();


CountriesRouter.get("/getAllCountries", function (req, res, next) {
    res.status(200).json({
        message: "rest contries api is under development",
    });
});

module.exports = CountriesRouter;