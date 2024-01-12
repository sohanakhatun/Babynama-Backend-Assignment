const express = require("express");
const router = express.Router();

const {createArtist} = require("../Controllers/artistController");
const{getArtists} = require("../Controllers/artistController");
router.post("/create-artist",createArtist);
router.get("/all-artists",getArtists);
module.exports = router;