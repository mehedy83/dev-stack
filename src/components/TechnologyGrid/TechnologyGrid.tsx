import type { Technology } from "../../types/technology";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

interface TechnologyGridProps {
  technologies: Technology[];
}

const TechnologyGrid = ({ technologies }: TechnologyGridProps) => {
  return (
    <section className="bg-white px-5 py-0 md:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Explore the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologyGrid;