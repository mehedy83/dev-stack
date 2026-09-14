import type { Technology } from "../../types/technology";

interface YourStackProps {
  stack: Technology[];
  onClearStack: () => void;
}

const YourStack = ({ stack, onClearStack }: YourStackProps) => {
  return (
    <aside className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:self-start">
      
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">
          Your Stack
        </h2>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
          {stack.length} selected
        </span>
      </div>

      
     <div className="min-h-48">
  {stack.length === 0 ? (
    <div className="flex min-h-48 flex-col items-center justify-center text-center">
      <div className="mb-3 text-3xl text-slate-300">
        +
      </div>

      <p className="text-sm font-medium text-slate-500">
        Your stack is empty
      </p>

      <p className="mt-1 max-w-xs text-xs leading-5 text-slate-400">
        Add technologies from the list to build your ideal development stack.
      </p>
    </div>
  ) : (
    <div className="mt-4 space-y-2">
      {stack.map((technology) => (
        <div
          key={technology.id}
          className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />

          <div>
            <p className="text-sm font-semibold text-slate-800">
              {technology.name}
            </p>

            <p className="text-xs text-slate-400">
              {technology.category}
            </p>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

     
      <button
        onClick={onClearStack}
        className="w-full rounded-md border border-slate-200 py-2 text-xs font-medium text-slate-300"
      >
        Remove All
      </button>
    </aside>
  );
};

export default YourStack;