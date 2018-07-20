const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const path = require("path");
require("./models/User");
require("./services/passport");

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//http://localhost:5000/auth/google
