import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { SONG_URL } from "../baseUrl";
const AddSongs = () => {
  const [name, setName] = useState("");
  const [albumart, setAlbumart] = useState("");
  const [year, setYear] = useState();
  const [artist, setArtist] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${SONG_URL}/create-song`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:name.toLowerCase(),
          albumart,
          year,
          artist: artist.toLowerCase(),
        }),
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Something went wrong!");
          }else{
            toast.success("Song added successfully");
          }

          return response.json();
        })
      setName("");
      setAlbumart("");
      setArtist("");
      setYear();
      toast.success("Song added successfully");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className=" text-white h-screen  font-Inter flex flex-col gap-3">
      <div className="font-bold text-2xl text-center mt-4">
        Add Your Favourite Song Here!
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="font-bold">
              Enter Song Name
            </label>
            <input
              type="text"
              value={name}
              className="rounded-md h-12 bg-blue-100 text-black sm:w-96 xsm:w-full xxsm:w-64 xxsm:mx-auto"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="image" className="font-bold">
              Enter Song's Album Art
            </label>
            <input
              type="text"
              value={albumart}
              onChange={(e) => setAlbumart(e.target.value)}
              className="rounded-md h-12 bg-blue-100 text-black sm:w-96 xsm:w-full xxsm:w-64 xxsm:mx-auto"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="image" className="font-bold">
              Enter Release Year
            </label>
            <input
              type="Number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="rounded-md h-12 bg-blue-100 text-black sm:w-96 xsm:w-full xxsm:w-64 xxsm:mx-auto"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="image" className="font-bold">
              Enter Artist
            </label>
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="rounded-md h-12 bg-blue-100 text-black sm:w-96 xsm:w-full xxsm:w-64 xxsm:mx-auto"
            />
          </div>
          <button className="rounded-md bg-blue-700 hover:bg-blue-900 w-fit p-2 px-4 mx-auto">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSongs;
