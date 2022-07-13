const express = require("express");
const cors = require("cors");

<<<<<<< HEAD
const {
  authRouter,
  //configSecurity,
} = require("../src/controller/authRegister");
=======
const { authRouter, configSecurity } = require("./controller/authRouter");
>>>>>>> 6a4dbe0e01a14db8e92de409dfa1bbfcb0c55582

const app = express();
const { connectDB } = require("./mongo");
const { disconnectDB } = require("./mongo");
<<<<<<< HEAD
const songRouter = require("./controller/songRouter");
const artistRouter = require("./controller/artistsRouter");
=======
const songsRouter = require("./controller/songRouter");
const playlistRouter = require("./controller/playlistRouter");
const albumRouter = require("./controller/albumRouter");
>>>>>>> 6a4dbe0e01a14db8e92de409dfa1bbfcb0c55582
const User = require("./controller/userRouter");
const PORT = process.env.PORT || 8080;
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

//configSecurity(app);
app.use(express.json());
app.use("/songs", songRouter);
app.use("/", User);
app.use("/", authRouter);
<<<<<<< HEAD
app.use("/", artistRouter);
=======
app.use("/", playlistRouter);
app.use("/", albumRouter);
>>>>>>> 6a4dbe0e01a14db8e92de409dfa1bbfcb0c55582

if (process.env.NODE_ENV !== "test") {
  connectDB().then(async (error) => {
    if (error) {
      console.log(error);
    }
  });
}

const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "test") {
    console.log('"Server is up and running in port 8080"');
  }
});

module.exports = { app, server };
