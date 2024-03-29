const express = require("express");
const app = express();
require("dotenv").config();

const { connection } = require("./db.js");
app.use(express.json());

app.use(express.json());
const userRoutes = require("./routes/userRoutes");
const { upload_FileRoute } = require("./routes/file.routes.js");
// using cors
const cors = require("cors");
app.use(cors());
// 
app.get("/", (req, res) => {
  res.send("welcome to mobigic");
});
const { auth } = require("./middleware/auth.middleware.js");
// user Routes
app.use("/api/user", userRoutes);
// file_toutes
app.use("/uploadfiles", auth, upload_FileRoute);
// uplpoading static files 
app.use("/uploads", express.static("uploads"));
// starting the server with connection of mongodb database with specific port 
app.listen(process.env.PORT, async () => {
  await connection;
  console.log("database is conencted");
  console.log(`port ${process.env.PORT} running at the server`);
});
