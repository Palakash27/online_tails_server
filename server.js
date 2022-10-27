const express = require("express");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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
require("./app/routes/user.routes")(app);

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
