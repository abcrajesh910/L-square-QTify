
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
    // Top Albums API call (Cypress iska wait kar raha hai)
    axios.get("https://qtify-backend.labs.crio.do/albums/top")
      .then(res => setTopAlbums(res.data))
      .catch(err => console.error(err));
    
    // New Albums API call
    axios.get("https://qtify-backend-labs.crio.do/albums/new")
      .then(res => setNewAlbums(res.data))
      .catch(err => console.error(err));

    // Songs API call
    axios.get("https://qtify-backend-labs.crio.do/songs")
      .then(res => setSongs(res.data))
      .catch(err => console.error(err));
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