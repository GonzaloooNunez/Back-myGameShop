require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const router = require("./routes/routes");
const userRoutes = require("./routes/userRoutes");
const gamesRoutes = require("./routes/gamesRoutes");

const app = express();
app.use(cookieParser());
const corsOptions = {
  origin: "https://my-game-shop.vercel.app/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 3000; //https://my-game-shop.vercel.app/

connectDB();

app.use(express.json());

app.use("/", router);
app.use("/user", userRoutes);
app.use("/games", gamesRoutes);

app.listen(port, () => {
  console.log(Servidor corriendo en http://localhost:${port});