require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const router = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");
const gamesRoutes = require("./routes/gamesRoutes");

const app = express();
app.use(cookieParser());

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://my-game-shop.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

app.use(express.json());

const port = process.env.PORT || 3000;

connectDB();

// Wrapping all routes with allowCors function
app.use("/", allowCors(router));
app.use("/user", allowCors(userRoutes));
app.use("/games", allowCors(gamesRoutes));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
