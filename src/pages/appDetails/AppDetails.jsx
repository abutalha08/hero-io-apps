import { useContext } from "react";
import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { FaDownload, FaStar, FaCommentAlt } from "react-icons/fa";
import { GridLoader } from "react-spinners";
import { toast } from "react-toastify";

import useApps from "../../hooks/useApps";
import { InstallAppsContext } from "../../context/InstallAppsContext";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  const expectedApp = apps?.find(
    (app) => String(app.id) === id
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <GridLoader color="#8B5CF6" />
      </div>
    );
  }

  if (!expectedApp) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl font-bold">
        App Not Found!
      </div>
    );
  }

  const isInstalled = installedApps?.some(
    (app) => app.id === expectedApp.id
  );

  const handleInstallApp = () => {
    if (isInstalled) {
      toast.info("App already installed!");
      return;
    }

    setInstalledApps([...installedApps, expectedApp]);
    toast.success(`${expectedApp.title} installed successfully!`);
  };

  const chartData = [...expectedApp.ratings].reverse();

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center border-b border-gray-100">

          {/* Image */}
          <div className="w-32 h-32 md:w-44 md:h-44 shrink-0 rounded-2xl overflow-hidden shadow">
            <img
              src={expectedApp.image}
              alt={expectedApp.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1 w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-slate-800">
              {expectedApp.title}
            </h1>

            <p className="text-purple-600 font-semibold mt-1">
              Developed by {expectedApp.companyName}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-5">

              <div>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <FaDownload /> Downloads
                </p>
                <h3 className="text-lg font-bold">
                  {expectedApp.downloads}
                </h3>
              </div>

              <div>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <FaStar className="text-orange-400" /> Rating
                </p>
                <h3 className="text-lg font-bold">
                  {expectedApp.ratingAvg}
                </h3>
              </div>

              <div>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <FaCommentAlt className="text-purple-400" /> Reviews
                </p>
                <h3 className="text-lg font-bold">
                  {expectedApp.reviews}
                </h3>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleInstallApp}
              className={`mt-6 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition active:scale-95 ${isInstalled
                ? "bg-gray-500 hover:bg-gray-600 cursor-pointer"
                : "bg-green-500 hover:bg-green-600 cursor-pointer"
                }`}
            >
              {isInstalled
                ? "Installed App"
                : `Install Now (${expectedApp.size} MB)`}
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Chart */}
          <div>
            <h2 className="text-lg font-bold mb-6 border-b pb-2">
              Ratings
            </h2>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={chartData}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip />
                  <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={16}>
                    {chartData.map((_, index) => (
                      <Cell key={index} fill="#8B5CF6" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-bold mb-6 border-b pb-2">
              Description
            </h2>

            <p className="text-gray-500 leading-relaxed">
              {expectedApp.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDetails;