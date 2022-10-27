module.exports = (app) => {
    const pets = require("../controllers/pet.controller.js");

    var router = require("express").Router();

    // Create a new Pet
    router.post("/", pets.create);

    // Retrieve all Pets
    router.get("/", pets.findAll);

    // Retrieve all Pets of a user
    router.get("/:userID", pets.findAllOfUser);

    // Retrieve a single Pet with id
    router.get("/:id", pets.findOne);

    // Update a Pet with id
    router.put("/:id", pets.update);

    // Delete a Pet with id
    router.delete("/:id", pets.delete);

    // delete all Pets
    router.delete("/", pets.deleteAll);

    app.use("/api/pets", router);
};
