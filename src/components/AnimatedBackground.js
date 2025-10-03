'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
    const mouseGradientRef = useRef(null);
    const mouseX = useRef(0.5);
    const mouseY = useRef(0.5);
    const ticking = useRef(false);
    const lastUpdateTime = useRef(0);

    const updateGradient = () => {
        if (mouseGradientRef.current) {
            mouseGradientRef.current.style.background = `radial-gradient(
        circle at ${mouseX.current * 100}% ${mouseY.current * 100}%, 
        rgba(125, 90, 255, 0.2), 
        transparent 40%
      )`;
            mouseGradientRef.current.style.transform = "translateZ(0)";
        }
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.current = e.clientX / window.innerWidth;
            mouseY.current = e.clientY / window.innerHeight;

            // Throttle updates to improve performance
            const now = Date.now();
            if (!ticking.current && now - lastUpdateTime.current > 20) {
                // Limit to ~50fps
                requestAnimationFrame(() => {
                    updateGradient();
                    ticking.current = false;
                    lastUpdateTime.current = now;
                });
                ticking.current = true;
            }
        };

        // Initialize gradient
        updateGradient();

        // Add event listener
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            {/* Grid pattern background */}
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />

            {/* Mouse following gradient */}
            <div
                ref={mouseGradientRef}
                className="absolute inset-0 opacity-40"
            />

            {/* Animated circles */}
            <div>
                <div className="absolute left-1/5 bottom-1/3 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />

                <div className="absolute -top-[25%] -left-[20%] h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[120px]" />

                <div className="absolute bottom-[20%] -right-[20%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
            </div>
        </div>
    );
}