import React from "react";
import { useState, useEffect } from "react";
import { SONG_URL } from "../baseUrl";
import SongCard from "../Components/SongCard";
import Spinner from "../Components/Spinner";
const Home = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);
      const response = await fetch(`${SONG_URL}/all-songs`);
      const data = await response.json();
      setSongs(data.songs);
      setLoading(false);
    };
    fetchSongs();
  }, []);
  return (
    <div className="  h-full w-full text-white font-Inter">
      <div className="flex flex-row justify-between">
        <h1 className="text-3xl pt-2 pl-7 font-bold text-[#c5c8e1]">
          Your Favourites!
        </h1>
      </div>
      {/* SONGS DISPLAY */}
      <div>{loading ? <div className="flex justify-center items-center"><Spinner /></div> : <SongCard songs={songs} />}</div>
    </div>
  );
};

export default Home;
