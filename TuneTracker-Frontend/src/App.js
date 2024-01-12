import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import AddArtist from "./Pages/AddArtist";
import Artists from "./Pages/Artists";
import AddSongs from "./Pages/AddSongs";
import ArtistSongs from "./Pages/ArtistSongs";

function App() {


    return(
<div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-artist" element={<AddArtist/>}/>
        <Route path="/artists" element={<Artists/>}/>
        <Route path="/add-songs" element={<AddSongs/>}/>
        <Route path="/artist-songs/:id" element={<ArtistSongs/>}/>
    </Routes>
</div>
    )
  
}

export default App;
