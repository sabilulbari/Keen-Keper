export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>

        {/* Text */}
        <h2 className="text-lg font-semibold text-gray-700">Loading magic...</h2>

        <p className="text-sm text-gray-500 mt-1">Please wait a moment ✨</p>
      </div>
    </div>
  );
}
