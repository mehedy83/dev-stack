import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import TechnologyGrid from "./components/TechnologyGrid/TechnologyGrid";
import YourStack from "./components/YourStack/YourStack";
import type { Technology } from "./types/technology";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import technologiesData from "./data/technologies.json";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

const handleAddToStack = (technology: Technology) => {
  setStack((currentStack) => {
    if (currentStack.some((item) => item.id === technology.id)) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return currentStack;
    }

    toast.success(
      `${technology.name} added to your stack!`
    );

    return [...currentStack, technology];
  });
};

const handleClearStack = () => {
  if (stack.length === 0) {
    return;
  }

  setStack([]);

  toast.info("All technologies removed.");
};

const handleRemoveFromStack = (technologyId: string) => {
  const technology = stack.find(
    (item) => item.id === technologyId
  );

  setStack((currentStack) =>
    currentStack.filter(
      (item) => item.id !== technologyId
    )
  );

  if (technology) {
    toast.info(
      `${technology.name} removed from your stack.`
    );
  }
};

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
        <TechnologyGrid
         technologies={technologies}
          onAddToStack={handleAddToStack}
          stack={stack}
        />
        <YourStack
        stack={stack}
        onClearStack={handleClearStack}
        onRemoveFromStack={handleRemoveFromStack}
      />
      </div>
    )}
      <ToastContainer
       position="top-right"
      autoClose={2000}
       hideProgressBar={false}
      newestOnTop
      closeOnClick
     pauseOnHover
     theme="light"
    />
  </>
);
}
export default App;