import { GridLoader} from "react-spinners";
import { Link } from "react-router";
import AppCard from "../ui/AppCard";
import useApps from "../../hooks/useApps";

const TrendingApps = () => {
  const { apps, loading } = useApps();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          Trending Apps
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
          Discover the most popular apps loved by users worldwide.
          Explore innovative tools, productivity boosters, and
          entertainment apps—all in one place.
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center py-20">
          <GridLoader color="#8B5CF6" />
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.slice(0, 9).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}

      {/* Button */}
      {!loading && (
        <div className="mt-12 text-center">
          <Link to="/apps">
            <button className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-medium shadow-md transition">
              View All Apps
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default TrendingApps;