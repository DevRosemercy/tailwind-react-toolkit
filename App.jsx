export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white">
      
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-white/20">
        
        <h1 className="text-3xl font-bold mb-2">
          Tailwind React Toolkit 🚀
        </h1>

        <p className="text-gray-300 mb-6">
          A modern UI built with TailwindCSS inside React
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-xl font-semibold">
          Get Started
        </button>

        <div className="mt-6 text-sm text-gray-400">
          Built with React + TailwindCSS
        </div>

      </div>

    </div>
  );
}