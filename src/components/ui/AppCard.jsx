import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="block bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden hover:-translate-y-1"
    >
      {/* Image */}
      <div className="h-52 flex items-center justify-center bg-gray-50 p-6">
        <img
          src={app.image}
          alt={app.title}
          className="max-h-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-slate-800 line-clamp-1">
          {app.title}
        </h2>

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 bg-green-100 text-green-600 px-3 py-1.5 rounded-lg text-sm font-medium">
            <FaDownload />
            {app.downloads}
          </span>

          <span className="flex items-center gap-2 bg-orange-100 text-orange-500 px-3 py-1.5 rounded-lg text-sm font-medium">
            <FaStar />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;