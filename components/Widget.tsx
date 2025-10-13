import React from "react";

export default function Widget() {
  return (
    <div
      style={{
        border: "2px dashed green",
        padding: "1rem",
        borderRadius: "8px",
        marginTop: "1rem",
      }}
    >
      <h2>Remote Widget change</h2>
      <p>Halo dari remote app!</p>
    </div>
  );
}
