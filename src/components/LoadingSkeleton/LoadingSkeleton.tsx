

function LoadingSkeleton() {
  return (
    <div className="grid items-start gap-6 bg-white px-5 py-10 lg:grid-cols-[1fr_320px] lg:px-8">


      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">

        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="
              min-h-[280px]
              animate-pulse
              rounded-[14px]
              border border-slate-100
              bg-white
              p-5
              shadow-[0_3px_12px_rgba(20,30,50,0.04)]
            "
          >


            <div className="mb-5 flex items-center justify-between">

              <div className="h-8 w-8 rounded-lg bg-slate-200" />

              <div className="h-5 w-16 rounded-full bg-slate-200" />

            </div>


            <div className="mb-3 h-5 w-24 rounded bg-slate-200" />

            <div className="space-y-2">

              <div className="h-3 w-full rounded bg-slate-100" />

              <div className="h-3 w-[90%] rounded bg-slate-100" />

              <div className="h-3 w-[75%] rounded bg-slate-100" />

            </div>


            <div className="mt-6 grid grid-cols-2 gap-2">

              <div className="h-6 rounded bg-slate-100" />

              <div className="h-6 rounded bg-slate-100" />

            </div>


            <div className="mt-4 h-10 rounded-md bg-slate-200" />

          </div>
        ))}

      </div>


      <div
        className="
          hidden
          rounded-[14px]
          border border-slate-100
          bg-white
          p-5
          lg:block
        "
      >

        <div className="mb-2 h-5 w-24 rounded bg-slate-200" />

        <div className="mb-5 h-3 w-32 rounded bg-slate-100" />


        <div className="space-y-2">

          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
            >

              <div className="h-8 w-8 rounded-md bg-slate-200" />

              <div className="flex-1 space-y-2">

                <div className="h-3 w-20 rounded bg-slate-200" />

                <div className="h-2 w-14 rounded bg-slate-100" />

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default LoadingSkeleton;