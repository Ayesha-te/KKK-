const StatsSection = () => {
  return (
    <section className="relative py-16 md:py-24 text-white overflow-hidden">
      {/* Background image from public/images/stats-bg.png with NO dark overlay */}
      <img
        src="/images/stats-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative container mx-auto px-4">
        {/* Stats with vertical dividers like the screenshot */}
        <div className="flex flex-col md:flex-row items-center justify-center md:divide-x md:divide-white/30">
          <div className="px-10 py-4 text-center">
            <div className="text-5xl font-bold text-golden-accent">500+</div>
            <div className="text-xl font-medium">Happy Families</div>
          </div>

          <div className="px-10 py-4 text-center">
            <div className="text-5xl font-bold text-golden-accent">4.9/5</div>
            <div className="text-xl font-medium">Customer Rating</div>
          </div>

          <div className="px-10 py-4 text-center">
            <div className="text-5xl font-bold text-golden-accent">40+</div>
            <div className="text-xl font-medium">Years Legacy</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;