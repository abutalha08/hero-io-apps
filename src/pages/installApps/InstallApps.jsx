import { useContext } from "react";
import { InstallAppsContext } from "../../context/InstallAppsContext";

const InstallApps = () => {
  const { installedApps, setInstalledApps } = useContext(InstallAppsContext);

  const handleUninstall = (targetApp) => {
    const remainingApps = installedApps.filter(
      (app) => app.id !== targetApp.id
    );

    setInstalledApps(remainingApps);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {installedApps.length === 0 ? 
        <div className="text-center py-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            No Installed Apps Found!
          </h2>
          <p className="mt-3 text-gray-500">
            Install apps to see them here.
          </p>
        </div>
       : (
        <>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
              Installed Apps
            </h2>
            <p className="mt-3 text-gray-500">
              Manage all your installed applications.
            </p>
          </div>

          <div className="space-y-5">
            {installedApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-6 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-24 w-24 object-contain rounded-xl bg-gray-50 p-2"
                  />

                  <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
                    {app.title}
                  </h3>
                </div>

                <button
                  onClick={() => handleUninstall(app)}
                  className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition shadow-md active:scale-95"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default InstallApps;