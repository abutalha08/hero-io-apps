
import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import errorImg from "../../assets/images/error-404.png"

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-xl w-full text-center">
        
        {/* Error Image Section */}
        <div className="flex justify-center mb-10">
          <img 
            src= {errorImg}
            alt="404 Error" 
            className="w-full h-auto max-w-md object-contain animate-pulse-slow"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Oops, page not found!
          </h1>
          <p className="text-gray-500 text-lg md:text-xl font-medium">
            The page you are looking for is not available.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-10">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-purple-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <FaArrowLeft className="text-sm" />
            Go Back!
          </button>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;