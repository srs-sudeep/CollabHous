//Call the libraries
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const connectDatabase = require('./config/db');
require("dotenv").config();

//Connect to database
connectDatabase();

// Initialize express
const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Import API routes
const authRoutes = require("./routes/auth");
const { signUp, logIn } = require("./controllers/auth");


// Use API routes
app.use("/api/auth", authRoutes);

//Listen to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
