/** Minimal toast shown when a demo-only link is clicked. */
const Toast = ({ message }) => {
  if (!message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className="toast fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 px-4 py-2.5 rounded-lg border border-neutral-700 bg-neutral-950 text-xs font-mono text-neutral-200 shadow-2xl"
    >
      {message}
    </div>
  );
};

export default Toast;
