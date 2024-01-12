const express = require('express');
const cors = require('cors');
const app = express();

const database = require('./config/database');
const artistRoutes = require("./routes/artistRoute");
const songRoutes = require("./routes/songRoute");
// env setup
const dotenv = require('dotenv');
dotenv.config();

// PORT
const PORT = process.env.PORT || 6000;
// connecting to database
database.connect();

// Middlewares
app.use(express.json());
app.use(cors({origin:"*",credentials:true}));



// Routes
app.use("/artist",artistRoutes);
app.use("/songs",songRoutes);

// Listening on the PORT
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})