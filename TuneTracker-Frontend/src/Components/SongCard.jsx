import React from "react";

const SongCard = ({ songs, artistName }) => {
  return (
    <div>
      {songs.length > 0 ? (
        <div className="flex flex-row gap-4 flex-wrap justify-center items-center hover:transform   ">
          {songs.map((song) => (
            <div
              className="lg:w-64 h-96 m-4 rounded-md bg-gradient-to-tr from-[#AD6F69] to-[#2B4162] p-4 flex items-center justify-center xsm:w-56 sm:mx-0 xsm:mx-1"
              key={song._id}
            >
              <div className="flex w-fit h-fit flex-col gap-1 ">
                <img src={song.albumart} className="w-64 h-64 object-cover" />
                <p className="text-[#240b09] font-bold capitalize">
                  {song.title}
                </p>
                <p className="text-[#2e0f0c] font-bold">{song.year}</p>
                <p className="text-[#240b09] font-bold capitalize">
                  {artistName ? (
                    <div>
                      <p>{artistName}</p>
                    </div>
                  ) : (
                    <div>
                      <p>{song.artist[0].name}</p>
                    </div>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SongCard;
