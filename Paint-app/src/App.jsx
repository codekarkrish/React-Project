import { useEffect, useRef, useState } from "react";

import Menu from "./components/Menu";

import "./App.css";

function App() {

  const canvasRef = useRef(null);

  const ctxRef = useRef(null);

  const [isDrawing, setIsDrawing] =
    useState(false);

  const [lineWidth, setLineWidth] =
    useState(5);

  const [lineColor, setLineColor] =
    useState("black");

  const [lineOpacity, setLineOpacity] =
    useState(0.1);

  // Initialize Canvas

  useEffect(() => {

    const canvas = canvasRef.current;

    const ctx =
      canvas.getContext("2d");

    ctx.lineCap = "round";

    ctx.lineJoin = "round";

    ctx.strokeStyle = lineColor;

    ctx.lineWidth = lineWidth;

    ctx.globalAlpha = lineOpacity;

    ctxRef.current = ctx;

  }, [
    lineColor,
    lineOpacity,
    lineWidth
  ]);

  // Start Drawing

  const startDrawing = (e) => {

    ctxRef.current.beginPath();

    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    setIsDrawing(true);

  };

  // End Drawing

  const endDrawing = () => {

    ctxRef.current.closePath();

    setIsDrawing(false);

  };

  // Draw

  const draw = (e) => {

    if (!isDrawing) return;

    ctxRef.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );

    ctxRef.current.stroke();

  };

  return (

    <div className="App">

      <h1>
        Paint App 🎨
      </h1>

      <div className="draw-area">

        <Menu
          setLineColor={setLineColor}
          setLineWidth={setLineWidth}
          setLineOpacity={setLineOpacity}
        />

        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          onMouseDown={startDrawing}
          onMouseUp={endDrawing}
          onMouseMove={draw}
        />

      </div>

    </div>
  );
}

export default App;