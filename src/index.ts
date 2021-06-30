import express from "express";

const app = express();

// Init Middleware
// Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage
app.get("/", (req, res) => {
  res.send("Home");
});

// users API routes
app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
