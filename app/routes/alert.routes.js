module.exports = (app) => {
    const alerts = require("../controllers/alert.controller.js");

    var router = require("express").Router();

    // Create a new Alerts
    router.post("/", alerts.create);

    // Retrieve all Alertss
    router.get("/", alerts.findAll);

    // Retrieve a single Alerts with id
    router.get("/:id", alerts.findOne);

    // Update a Alerts with id
    router.put("/:id", alerts.update);

    // Delete a Alerts with id
    router.delete("/:id", alerts.delete);

    // Delete all Alerts
    router.delete("/", alerts.deleteAll);

    app.use("/api/alerts", router);
};
