import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe({ size = 400 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const thetaRef = useRef(0);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      scale: 1.15,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0.14, 0.35],
      markers: [
        { location: [37.7595, -122.4367], size: 0.1 }, // San Francisco
        { location: [48.2082, 16.3738], size: 0.1 }, // Vienna
        { location: [49.2827, -123.1207], size: 0.1 }, // Vancouver
        { location: [-34.6037, -58.3816], size: 0.1 }, // Buenos Aires
        { location: [24.7136, 46.6753], size: 0.1 }, // Riyadh
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        } else {
          phi += pointerInteractionMovement.current * 0.01;
        }

        state.phi = phi;
        state.theta = thetaRef.current;
      },
    });

    const onPointerDown = (e: TouchEvent | MouseEvent) => {
      pointerInteracting.current = Date.now();
      canvasRef.current!.style.cursor = "grabbing";
    };

    const onPointerUp = () => {
      pointerInteracting.current = null;
      canvasRef.current!.style.cursor = "grab";
    };

    const onPointerMove = (e: TouchEvent | MouseEvent) => {
      if (pointerInteracting.current !== null) {
        const pointer = e as MouseEvent;
        const currentX = pointer.clientX;

        // Calculate rotation based on mouse movement
        const deltaX = pointer.movementX;
        pointerInteractionMovement.current = deltaX;
      }
    };

    canvasRef.current.addEventListener("mousedown", onPointerDown);
    document.addEventListener("mouseup", onPointerUp);
    document.addEventListener("mousemove", onPointerMove);

    canvasRef.current.addEventListener("touchstart", onPointerDown as any);
    document.addEventListener("touchend", onPointerUp as any);
    document.addEventListener("touchmove", onPointerMove as any);

    return () => {
      globe.destroy();
      canvasRef.current?.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("mouseup", onPointerUp);
      document.removeEventListener("mousemove", onPointerMove);

      canvasRef.current?.removeEventListener(
        "touchstart",
        onPointerDown as any
      );
      document.removeEventListener("touchend", onPointerUp as any);
      document.removeEventListener("touchmove", onPointerMove as any);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-auto aspect-square cursor-grab"
    />
  );
}
