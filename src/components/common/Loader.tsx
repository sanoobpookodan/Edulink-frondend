export default function Loader() {
  return (
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-white/70 dark:bg-black/60
      "
    >
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}
