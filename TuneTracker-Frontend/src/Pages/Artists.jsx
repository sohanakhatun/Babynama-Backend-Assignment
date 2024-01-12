import React, { useState, useEffect } from "react";
import { ARTIST_URL } from "../baseUrl";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";
const Artists = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      const response = await fetch(`${ARTIST_URL}/all-artists`);
      const data = await response.json();
      setArtists(data.artists);
      setLoading(false);
    };
    fetchArtists();
  }, []);

  const showArtistSongs = async (e) => {
    const { value } = e.target;
    const filteredArtist = artists.filter((artist) => artist.name === value);
    navigate(`/artist-songs/${filteredArtist[0]._id}`);
  };

  return (
    <div className=" flex flex-col  gap-12 overflow-y-hidden">
      <div className="text-3xl font-bold text-white mt-4 text-center">
        Find All Your Favourite Artists Here!
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="ml-4  flex flex-row  flex-wrap gap-2">
          {artists.length > 0 ? (
            <div className="flex flex-row flex-wrap lg:gap-6 justify-center items-center md:gap-3">
              {artists.map((artist) => (
                <div className="flex flex-col p-4 text-center justify-center items-center">
                  <div>
                    <img
                      src={artist.image}
                      className="w-64 h-64 rounded-full"
                    />
                  </div>
                  <button
                    className="font-bold text-white pt-4 text-xl capitalize hover:cursor-pointer"
                    onClick={showArtistSongs}
                    value={artist.name}
                  >
                    {artist.name}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

export default Artists;
