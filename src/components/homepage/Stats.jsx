


const Stats = () => {
  const statsData = [
    {
      title: "Total Downloads",
      value: "29.6M",
      subtitle: "21% More Than Last Month",
    },
    {
      title: "Total Reviews",
      value: "906K",
      subtitle: "46% More Than Last Month",
    },
    {
      title: "Active Apps",
      value: "132+",
      subtitle: "31 More Will Launch",
    },
  ];

  return (
    <section className="bg-purple-500 py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {statsData.map((stat, index) => (
            <div key={index}>
              <p className="text-sm md:text-base font-medium text-white/90">
                {stat.title}
              </p>

              <h3 className="mt-3 text-5xl sm:text-6xl md:text-7xl font-extrabold">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm text-white/70">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;