const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
// const saveRoutes = require("./routes/saveRoutes");
const router = require("express").Router();
const keys = require("./config/keys");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

require("./models/User");
require("./services/passport");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
// app.use(express.static("client/build"));

// router.use("/save_hospital", saveRoutes);

if (process.env.NODE.ENV === "production") {
  //express will serve up production assets
  //like out main.js file, or main.css file
  app.use(express.static("jarvis2.0/build"));
  //express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "jarvis2.0", "build", "index.html"));
  });
}

require("./routes/authRoutes")(app);

app.listen(PORT);

//http://localhost:5000/auth/google
