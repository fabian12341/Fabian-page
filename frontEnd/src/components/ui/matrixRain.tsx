"use client";
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "アカサタナハマヤラワ0123456789".split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: Math.floor(columns) }, () =>
      Math.floor(Math.random() * canvas.height / fontSize)
    );

    const colorList = [
      [0, 255, 0],     // green
      [0, 255, 255],   // cyan
      [255, 0, 255],   // magenta
      [255, 255, 0],   // yellow
      [0, 128, 255],   // blue
    ];

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const lerpColor = (c1: number[], c2: number[], t: number) =>
      `rgba(${lerp(c1[0], c2[0], t)}, ${lerp(c1[1], c2[1], t)}, ${lerp(c1[2], c2[2], t)}, 0.67)`;

    let colorIndex = 0;
    let nextColorIndex = 1;
    let transitionStart = Date.now();

    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const draw = () => {
      const now = Date.now();
      const elapsed = now - transitionStart;
      const t = Math.min(elapsed / 4000, 1); // transición en 4s

      const currentColor = lerpColor(
        colorList[colorIndex],
        colorList[nextColorIndex],
        t
      );

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = currentColor;
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      if (t >= 1) {
        transitionStart = now;
        colorIndex = nextColorIndex;
        nextColorIndex = (nextColorIndex + 1) % colorList.length;
      }
    };

    const interval = setInterval(draw, 50); // <- velocidad lenta original
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-0 !block"
    />
  );
}
