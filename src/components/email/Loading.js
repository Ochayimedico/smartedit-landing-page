export default function Loading() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center bg-opacity-80 bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#004777]"></div>
    </div>
  );
}
