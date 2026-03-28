export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="
          w-6 h-6 rounded-full border-4 animate-spin
          border-gray-300 border-t-black
          dark:border-gray-600 dark:border-t-white
        "
      />
    </div>
  );
}
