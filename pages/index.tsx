import React, { useMemo } from "react";
import Widget from "../components/Widget";

export default function Home() {
  const widgetConfig = useMemo(
    () => ({
      title: "Widget dari Remote",
      theme: "light",
      refreshInterval: 3000,
    }),
    []
  );

  return (
    <main style={{ padding: 24 }}>
      <h1>Host App</h1>
      <Widget config={widgetConfig} />
    </main>
  );
}
