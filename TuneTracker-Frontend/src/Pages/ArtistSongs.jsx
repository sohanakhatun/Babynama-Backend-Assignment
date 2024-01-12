import React, { useEffect, useState } from "react";
import { SONG_URL } from "../baseUrl";
import { useParams } from "react-router-dom";
import SongCard from "../Components/SongCard";
import Spinner from "../Components/Spinner";
const ArtistSongs = () => {
  const [song, setSong] = useState([]);
  const [artistName, setArtistName] = useState("");
  const [NoOfSongs, setNoOfSongs] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      setLoading(true);
      const response = await fetch(`${SONG_URL}/artist-songs/${id}`);
      const data = await response.json();
      setSong(data.artistData.songs);
      setNoOfSongs(data.artistData.songs.length);
      setArtistName(data.artistData.name);
      setLoading(false);
    };
    fetchSong();
  }, []);

  return (
    <div className=" w-full  text-white font-Inter">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center pt-4 pl-7 font-bold text-[#c5c8e1] capitalize">
            Found{" "}
            <span className="  bg-gradient-to-tr from-[#DB6885] to-[#972239] text-transparent bg-clip-text">
              {NoOfSongs}
            </span>{" "}
            {artistName} Songs
          </h1>
          <SongCard songs={song} artistName={artistName} />
        </div>
      )}
    </div>
  );
};

export default ArtistSongs;
