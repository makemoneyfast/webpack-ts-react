import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Rofl } from "./example";
import CarouselDemo from "./components/CarouselDemo";

import "./style.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const App = () => (
  <StrictMode>
    <div>
      <div
        style={{ textAlign: "center", padding: "20px", background: "#f8f9fa" }}
      >
        <h1 style={{ margin: "0 0 10px 0", color: "#2c3e50" }}>
          Modern React TypeScript App
        </h1>
        <p style={{ margin: 0, color: "#7f8c8d" }}>
          Featuring Intersection Observer Carousel
        </p>
      </div>

      <CarouselDemo />

      <div
        style={{
          textAlign: "center",
          padding: "40px 20px",
          background: "#ecf0f1",
          marginTop: "40px",
        }}
      >
        <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>
          Original Components
        </h2>
        <Rofl count={3} />
      </div>
    </div>
  </StrictMode>
);

const root = createRoot(container);
root.render(<App />);
