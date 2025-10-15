import React from "react";

interface WidgetProps {
  config: {
    title: string;
    theme: string;
    refreshInterval: number;
  };
}

export default function Widget({ config }: WidgetProps) {
  return (
    <div
      style={{
        border: "2px dashed green",
        padding: "1rem",
        borderRadius: "8px",
        marginTop: "1rem",
        background: config.theme === "light" ? "#fff" : "#333",
        color: config.theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>{config.title}</h2>
      <p>Refresh interval: {config.refreshInterval} ms</p>
      <p>Halo dari remote app!</p>
    </div>
  );
}
