"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        style={{
          padding: "10px",
          background: "#0070f3",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ← Back To Page
      </button>
    </div>
  );
};

export default BackButton;
