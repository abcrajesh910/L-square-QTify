
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//     </div>
//   );
// }

// export default App;




import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Section from "./components/Section/Section";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

 useEffect(() => {
  const fetchAllData = async () => {
    try {
      const [topAlbumsRes, newAlbumsRes, songsRes] = await Promise.all([
        axios.get("https://qtify-backend.labs.crio.do/albums/top"),
        axios.get("https://qtify-backend.labs.crio.do/albums/new"),
        axios.get("https://qtify-backend.labs.crio.do/songs")
      ]);

      setTopAlbums(topAlbumsRes.data);
      setNewAlbums(newAlbumsRes.data);
      setSongs(songsRes.data);


    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  fetchAllData();
}, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Ab ye variables use ho rahe hain, warnings hat jayengi */}
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <Section title="Songs" data={songs} type="song" />
    </div>
  );
}


export default App;