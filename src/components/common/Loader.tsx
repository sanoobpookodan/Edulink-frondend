export default function Loader() {
  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-white/70 dark:bg-black/60
      "
    >
      <div
        className="
          w-8 h-8 rounded-full border-4 animate-spin
          border-gray-300 border-t-black
          dark:border-gray-600 dark:border-t-white
        "
      />
    </div>
  );
}
