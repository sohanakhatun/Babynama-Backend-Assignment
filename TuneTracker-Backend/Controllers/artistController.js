const Artist = require("../models/Artist");

// CREATE ARTIST API
exports.createArtist = async (req, res) => {
  try {
    // Destructure fields from request body
    const { name, image } = req.body;

    // Validation
    // Check if all the fields are avaliable
    if (!name || !image) {
      return res.status(403).send({
        success: false,
        message: "All fields are required",
      });
    }
    //  Check if the artist already exists
    const existingArtist = await Artist.findOne({ name });
    if (existingArtist) {
      return res.status(400).json({
        success: false,
        message: "Artist already exists",
      });
    }

    // Create Artist
    const artist = await Artist.create({ name:name.toLowerCase(), image });

    return res.status(200).json({
      success: true,
      artist,
      message: "Artist added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Artist can't be created.Please try again later",
    });
  }
};

// GET ARTIST API
exports.getArtists = async (req, res) => {
  try {
    const artists = await Artist.find({});
    return res.status(200).json({
      success: true,
      artists,
      message: "Artist fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Artist can't be fetched.Please try again later",
    });
  }
};
