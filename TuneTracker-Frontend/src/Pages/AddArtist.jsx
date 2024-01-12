import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ARTIST_URL } from "../baseUrl";
import { useNavigate } from "react-router-dom";
const AddArtist = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ARTIST_URL}/create-artist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name.toLowerCase(), image }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error occured while creating Artist.Status returned:${response.status}`
            );
          }
          return response.json();
        })
      setName("");
      setImage("");
      toast.success("Artist added successfully");
      navigate("/artists");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className=" text-white h-screen  font-Inter flex flex-col gap-12">
      <div className="font-bold text-2xl text-center mt-4">
        Add Your Favourite Artist Here!
      </div>
      <div className="flex flex-col justify-center items-center">
        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="font-bold">
              Enter Artist Name
            </label>
            <input
              type="text"
              value={name}
              className="rounded-md h-12 bg-blue-100 text-black  sm:w-96 xsm:w-full xxsm:w-64 xxsm:mx-auto"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="image" className="font-bold">
              Link to the artist's picture
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="rounded-md h-12 bg-blue-100 text-black  sm:w-96 xsm:w-full xxsm:w-64 xxsm:mx-auto"
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

export default AddArtist;
