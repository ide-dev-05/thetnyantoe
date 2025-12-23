"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { useTheme } from "next-themes";

interface DelicateAsciiDotsProps {
  backgroundColor?: string;
  textColor?: string;
  gridSize?: number;
  removeWaveLine?: boolean;
  animationSpeed?: number;
}

interface Wave {
  x: number;
  y: number;
  frequency: number;
  amplitude: number;
  phase: number;
  speed: number;
}

interface GridCell {
  char: string;
  opacity: number;
}

const DelicateAsciiDots = ({
  gridSize = 10,
  removeWaveLine = true,
  animationSpeed = 0.75,
}: DelicateAsciiDotsProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render canvas after hydration to avoid mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const wavesRef = useRef<Wave[]>([]);
  const timeRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);
  const clickWaves = useRef<
    Array<{ x: number; y: number; time: number; intensity: number }>
  >([]);
  const dimensionsRef = useRef({ width: 0, height: 0 });

  const CHARS =
    "⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿⠁⠂⠄⠈⠐⠠⡀⢀⠃⠅⠘⠨⠊⠋⠌⠍⠎⠏⠑⠒⠓⠔⠕⠖⠗⠙⠚⠛⠜⠝⠞⠟⠡⠢⠣⠤⠥⠦⠧⠩⠪⠫⠬⠭⠮⠯⠱⠲⠳⠴⠵⠶⠷⠹⠺⠻⠼⠽⠾⠿⡁⡂⡃⡄⡅⡆⡇⡉⡊⡋⡌⡍⡎⡏⡑⡒⡓⡔⡕⡖⡗⡙⡚⡛⡜⡝⡞⡟⡡⡢⡣⡤⡥⡦⡧⡩⡪⡫⡬⡭⡮⡯⡱⡲⡳⡴⡵⡶⡷⡹⡺⡻⡼⡽⡾⡿⢁⢂⢃⢄⢅⢆⢇⢉⢊⢋⢌⢍⢎⢏⢑⢒⢓⢔⢕⢖⢗⢙⢚⢛⢜⢝⢞⢟⢡⢢⢣⢤⢥⢦⢧⢩⢪⢫⢬⢭⢮⢯⢱⢲⢳⢴⢵⢶⢷⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣉⣊⣋⣌⣍⣎⣏⣑⣒⣓⣔⣕⣖⣗⣙⣚⣛⣜⣝⣞⣟⣡⣢⣣⣤⣥⣦⣧⣩⣪⣫⣬⣭⣮⣯⣱⣲⣳⣴⣵⣶⣷⣹⣺⣻⣼⣽⣾⣿";

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const { width, height } = container.getBoundingClientRect();
    dimensionsRef.current = { width, height };

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  }, []);

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      mouseRef.current.isDown = true;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const { width, height } = dimensionsRef.current;
      const gridX = x / (width / gridSize);
      const gridY = y / (height / gridSize);

      clickWaves.current.push({
        x: gridX,
        y: gridY,
        time: Date.now(),
        intensity: 2,
      });

      const now = Date.now();
      clickWaves.current = clickWaves.current.filter(
        (wave) => now - wave.time < 4000
      );
    },
    [gridSize]
  );

  const handleMouseUp = useCallback(() => {
    mouseRef.current.isDown = false;
  }, []);

  const getClickWaveInfluence = useCallback(
    (x: number, y: number, currentTime: number) => {
      let total = 0;
      clickWaves.current.forEach((wave) => {
        const age = currentTime - wave.time;
        if (age < 4000) {
          const dx = x - wave.x;
          const dy = y - wave.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const waveRadius = (age / 4000) * gridSize * 0.8;
          const waveWidth = gridSize * 0.15;

          if (Math.abs(distance - waveRadius) < waveWidth) {
            const waveStrength = (1 - age / 4000) * wave.intensity;
            total +=
              waveStrength *
              (1 - Math.abs(distance - waveRadius) / waveWidth) *
              Math.sin((distance - waveRadius) * 0.5);
          }
        }
      });
      return total;
    },
    [gridSize]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const backgroundColor = resolvedTheme === "dark" ? "#000" : "#Ddddd1";
    const textColor = resolvedTheme === "dark" ? "18, 92, 18" : "0, 0, 0";

    const currentTime = Date.now();
    timeRef.current += animationSpeed * 0.016;

    const { width, height } = dimensionsRef.current;
    if (width === 0 || height === 0) return;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    const newGrid: (GridCell | null)[][] = Array(gridSize)
      .fill(0)
      .map(() => Array(gridSize).fill(null));

    const cellWidth = width / gridSize;
    const cellHeight = height / gridSize;

    const mouseGridX = mouseRef.current.x / cellWidth;
    const mouseGridY = mouseRef.current.y / cellHeight;

    const mouseWave: Wave = {
      x: mouseGridX,
      y: mouseGridY,
      frequency: 0.3,
      amplitude: 1,
      phase: timeRef.current * 2,
      speed: 1,
    };

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        let totalWave = 0;
        const allWaves = wavesRef.current.concat([mouseWave]);

        allWaves.forEach((wave) => {
          const dx = x - wave.x;
          const dy = y - wave.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const falloff = 1 / (1 + dist * 0.1);
          totalWave +=
            Math.sin(
              dist * wave.frequency - timeRef.current * wave.speed + wave.phase
            ) *
            wave.amplitude *
            falloff;
        });

        totalWave += getClickWaveInfluence(x, y, currentTime);

        const mouseDistance = Math.sqrt(
          (x - mouseGridX) ** 2 + (y - mouseGridY) ** 2
        );
        if (mouseDistance < gridSize * 0.3) {
          totalWave +=
            (1 - mouseDistance / (gridSize * 0.3)) *
            0.8 *
            Math.sin(timeRef.current * 3);
        }

        const normalizedWave = (totalWave + 2) / 4;
        if (Math.abs(totalWave) > 0.2) {
          const charIndex = Math.min(
            CHARS.length - 1,
            Math.max(0, Math.floor(normalizedWave * (CHARS.length - 1)))
          );
          const opacity = Math.min(
            0.9,
            Math.max(0.4, 0.4 + normalizedWave * 0.5)
          );
          newGrid[y][x] = { char: CHARS[charIndex] || CHARS[0], opacity };
        }
      }
    }

    const fontSize = Math.min(cellWidth, cellHeight) * 0.8;
    ctx.font = `${fontSize}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const cell = newGrid[y][x];
        if (cell && cell.char) {
          ctx.fillStyle = `rgba(${textColor}, ${cell.opacity})`;
          ctx.fillText(
            cell.char,
            x * cellWidth + cellWidth / 2,
            y * cellHeight + cellHeight / 2
          );
        }
      }
    }

    if (!removeWaveLine) {
      clickWaves.current.forEach((wave) => {
        const age = currentTime - wave.time;
        if (age < 4000) {
          const progress = age / 4000;
          const radius = progress * Math.min(width, height) * 0.5;
          const alpha = (1 - progress) * 0.3 * wave.intensity;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${textColor}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.arc(
            wave.x * cellWidth,
            wave.y * cellHeight,
            radius,
            0,
            2 * Math.PI
          );
          ctx.stroke();
        }
      });
    }

    animationFrameId.current = requestAnimationFrame(animate);
  }, [
    resolvedTheme,
    gridSize,
    animationSpeed,
    removeWaveLine,
    getClickWaveInfluence,
  ]);

  useEffect(() => {
    if (!mounted || !resolvedTheme) return;

    const waves: Wave[] = [];
    for (let i = 0; i < 4; i++) {
      waves.push({
        x: gridSize * (0.25 + Math.random() * 0.5),
        y: gridSize * (0.25 + Math.random() * 0.5),
        frequency: 0.2 + Math.random() * 0.3,
        amplitude: 0.5 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 0.5,
      });
    }
    wavesRef.current = waves;

    resizeCanvas();
    const canvas = canvasRef.current;
    if (!canvas) return;

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);

      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
      timeRef.current = 0;
      clickWaves.current = [];
      wavesRef.current = [];
    };
  }, [
    mounted,
    resolvedTheme,
    animate,
    resizeCanvas,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    gridSize,
  ]);

  if (!mounted || !resolvedTheme) {
    return (
      <div ref={containerRef} className="absolute inset-0 w-full h-full" />
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden z-[0]"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default DelicateAsciiDots;
