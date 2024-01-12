const Song = require("../models/Song");
const Artist = require("../models/Artist");

// CREATE SONG AND ADD THE SONG TO THE ARTIST'S DATABASE
exports.createSong = async (req, res) => {
  try {
    let { name, albumart, year, artist } = req.body;

    // VALIDATIONS
    // CHECK IF ALL THE FIELDS ARE AVALIABLE
    if (!name || !albumart || !year || !artist) {
      return res.status(403).send({
        success: false,
        message: "All fields are required",
      });
    }

    // CHECK IF THE SONG ALREADY EXISTS
    const exisitingSong = await Song.findOne({ title: name });
    if (exisitingSong) {
      return res.status(400).json({
        success: false,
        message: "Song already exists",
      });
    }

    // CHECK IF THE ARTIST EXISTS
    const artistDetails = await Artist.findOne({ name: artist });
    if (!artistDetails) {
      return res.status(404).json({
        success: false,
        message: "Artist Not Found.Please Create the Artist First",
      });
    }

    // CREATE A NEW SONG
    const newSong = await Song.create({
      title: name,
      albumart,
      year,
      artist: artistDetails,
    });

    // // ADD THE SONG TO THE ARTIST'S DATABASE
    artistDetails.songs.push(newSong._id);
    await artistDetails.save();

    // SEND RESPONSE
    res.status(200).json({
      success: true,
      newSong,
      message: "Song Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Song can't be added.Please try again later",
    });
  }
};

// GET ALL SONGS
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({}).populate({
      path: "artist",
      select: "name",
    });

    return res.status(200).json({
      success: true,
      songs,
      message: "Songs fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Songs can't be fetched.Please try again later",
    });
  }
};

// GET ONE SONG MATCHING WITH THE ID IN THE PARAMETERS
exports.getOneSong = async (req, res) => {
  try {
    const songId = req.params.id;
    const song = await Song.findById(songId);
    if (song) {
      return res.status(200).json({
        success: true,
        song,
        message: "Song fetched successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Song can't be fetched.Please try again later",
    });
  }
};

// GET SONGS OF A SINGLE ARTIST
exports.getSongsOfArtist = async (req, res) => {
  try {
    const artist = req.params.id;

    const artistData = await Artist.findById(artist).populate("songs");
    if (!artistData) {
      return res.status(404).json({ error: "Artist Not Found" });
    }
    return res.status(200).json({
      success: true,
      artistData,
      message: "Song fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Song can't be fetched.Please try again later",
    });
  }
};
