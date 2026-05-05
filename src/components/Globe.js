"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe({ size = 400 }) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  const thetaRef = useRef(0);

  useEffect(() => {
    let phi = 0;
    let animationId;
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      scale: 1.15,
      phi: 0,
      theta: 0,
      dark: 1,
      opacity: 0.9,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0.14, 0.35],
      markerElevation: 0,
      markers: [
        { location: [37.7595, -122.4367], size: 0.04 },
        { location: [48.2082, 16.3738], size: 0.04 },
        { location: [49.2827, -123.1207], size: 0.04 },
        { location: [-34.6037, -58.3816], size: 0.04 },
        { location: [24.7136, 46.6753], size: 0.04 },
      ],
    });

    function animate() {
      if (!pointerInteracting.current) {
        phi += 0.005;
      } else {
        phi += pointerInteractionMovement.current * 0.01;
      }
      globe.update({ phi, theta: thetaRef.current });
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);
    const onPointerDown = () => {
      pointerInteracting.current = Date.now();
      canvas.style.cursor = "grabbing";
    };

    const onPointerUp = () => {
      pointerInteracting.current = null;
      canvas.style.cursor = "grab";
    };

    const onPointerMove = (e) => {
      if (pointerInteracting.current !== null) {
        pointerInteractionMovement.current = e.movementX;
      }
    };
    canvas.addEventListener("mousedown", onPointerDown);
    document.addEventListener("mouseup", onPointerUp);
    document.addEventListener("mousemove", onPointerMove);

    canvas.addEventListener("touchstart", onPointerDown);
    document.addEventListener("touchend", onPointerUp);
    document.addEventListener("touchmove", onPointerMove);

    return () => {
      cancelAnimationFrame(animationId);
      globe.destroy();
      canvas.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("mouseup", onPointerUp);
      document.removeEventListener("mousemove", onPointerMove);

      canvas.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("touchend", onPointerUp);
      document.removeEventListener("touchmove", onPointerMove);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-auto aspect-square cursor-grab"
    />
  );
}
