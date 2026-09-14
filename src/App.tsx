import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechnologyGrid from "./components/TechnologyGrid/TechnologyGrid";
import YourStack from "./components/YourStack/YourStack";
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
      <div className="flex min-h-40 items-center justify-center">
        <p className="text-sm text-slate-400">
          Loading technologies...
        </p>
      </div>
    ) : (
      <div className="grid items-start gap-6 bg-white px-5 py-10 lg:grid-cols-[1fr_320px] lg:px-8">
        <TechnologyGrid technologies={technologies} />
        <div className="lg:mt-24">
           <YourStack />
        </div>
      </div>
    )}
  </>
);
}
export default App;