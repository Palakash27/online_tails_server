const express = require("express");

const app = express();

// db
const db = require("./app/models/index");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// routes
require("./app/routes/pet.routes")(app);

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
