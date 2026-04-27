import { GridLoader } from "react-spinners";
import AppCard from "../../components/ui/AppCard";
import useApps from "../../hooks/useApps";

const Apps = () => {
  const { apps, loading } = useApps();

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          Our Applications
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-500 leading-relaxed">
          Explore our collection of innovative apps built to serve millions
          worldwide with seamless digital experiences.
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex justify-center py-20">
          <GridLoader color="#8B5CF6" />
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Apps;