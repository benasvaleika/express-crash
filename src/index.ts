import express from "express";
import cors from "cors";

const app = express();

// Init Middleware
// Body parser Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage
app.get("/", (req, res) => {
  res.send("Home");
});

// users API routes
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
