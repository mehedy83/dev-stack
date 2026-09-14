import type { Technology } from "../../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <article className="flex min-h-67.5 flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:shadow-md">
      
      
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-medium text-sky-500">
          {technology.badge}
        </span>
      </div>

     
      <h3 className="mt-4 text-base font-bold text-slate-900">
        {technology.name}
      </h3>

      
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-400">
        {technology.description}
      </p>

      
      <div className="mt-auto border-t border-slate-100 pt-3">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          
          <span className="rounded bg-slate-50 px-2 py-1">
            {technology.category}
          </span>

          <span>{technology.difficulty}</span>

          <span className="font-medium text-slate-600">
            <span className="text-yellow-400">★</span>{" "}
            {technology.rating}
          </span>
        </div>

        
        <button className="mt-3 w-full rounded-md bg-slate-950 py-2 text-xs font-medium text-white transition hover:bg-slate-800">
          Add to Stack
        </button>
      </div>
    </article>
  );
};

export default TechnologyCard;