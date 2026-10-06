import { LoaderCircle } from "lucide-react";

function Loading({ text = "Loading products..." }) {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="loading-spinner">
        <LoaderCircle size={32} />
      </div>

      <p>{text}</p>
    </div>
  );
}

export default Loading;