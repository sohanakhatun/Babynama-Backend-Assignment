const express = require("express");
const router = express.Router();

const {createSong} = require("../Controllers/songController");

const {getAllSongs}=require("../Controllers/songController");

const {getOneSong}=require("../Controllers/songController");

const{getSongsOfArtist}=require("../Controllers/songController");
router.post("/create-song",createSong);
router.get("/all-songs",getAllSongs);
router.get("/all-songs/:id",getOneSong);
router.get("/artist-songs/:id",getSongsOfArtist);
module.exports = router;