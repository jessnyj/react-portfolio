const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring models for syncing
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);


// Start the API server and syncing database
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on port %s. Visit http://localhost:%s/ in your browser to access.", PORT, PORT);
    });
});
