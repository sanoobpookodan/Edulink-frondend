import toast from "react-hot-toast";

export const showSuccess = (message: string) => toast.success(message);

export const showError = (message: string) => toast.error(message);

export const showCustom = (message: string) =>
  toast((t) => (
    <div className="flex items-center justify-between gap-4">
      <span>{message}</span>
      <button onClick={() => toast.dismiss(t.id)}>✕</button>
    </div>
  ));

export const showCustom2 = (message: string) =>
  toast.success(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
