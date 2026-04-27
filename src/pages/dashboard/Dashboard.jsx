import { Legend, Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { InstallAppsContext } from "../../context/InstallAppsContext";
import { useContext } from "react";
import useApps from "../../hooks/useApps";

const Dashboard = () => {
  const { installedApps } = useContext(InstallAppsContext);
  const { apps } = useApps();

  const uninstalledAppsLength =
    (apps?.length || 0) - (installedApps?.length || 0);

  const data = [
    { name: "Installed", value: installedApps.length, fill: "#6366F1" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#F97316" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          App Analytics Dashboard
        </h2>
        <p className="mt-3 text-gray-500">
          Overview of installed and uninstalled applications
        </p>
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 md:p-10">
        
        {/* Chart container */}
        <div className="w-full h-75 md:h-112">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="65%"
                outerRadius="85%"
                paddingAngle={5}
                cornerRadius={10}
              />

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;