import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import type { Technology } from "./types/technology";
import technologiesData from "./data/technologies.json";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTechnologies(technologiesData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {loading ? (
        <p>Loading technologies...</p>
      ) : (
        <p>{technologies.length} technologies loaded</p>
      )}
    </>
  );
}

export default App;