import banner from "../../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8 lg:py-24">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold leading-[1.05] text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-6 text-slate-500">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-white"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Explore Technologies
            </button>

            <button className="rounded-md border border-slate-200 bg-white px-7 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Development technology stack"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;