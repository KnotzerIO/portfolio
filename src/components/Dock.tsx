"use client";

import { useState } from "react";
import { cn } from "../utils/cn";
import Logo from "../assets/icon.png";
import { i } from "framer-motion/client";
export interface DockItemProps {
  image: string;
  tooltip: string;
  onClick?: () => void;
}

interface DockProps {
  className?: string;
}

export default function Dock({ className }: DockProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDockHovered, setIsDockHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
    setIsDockHovered(true);
    setTimeout(() => {
      setShowTooltip(true);
    }, 150);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
    setShowTooltip(false);
    setIsDockHovered(false);
  };

  const items = [
    {
      image: Logo.src,
      tooltip: "Home",
      onClick: () => console.log("hello world"),
    },
    {
      image: Logo.src,
      tooltip: "Search",
      onClick: () => console.log("hello world"),
    },
    {
      image: Logo.src,
      tooltip: "Messages",
      onClick: () => console.log("hello world"),
    },
    {
      image: Logo.src,
      tooltip: "Notifications",
      onClick: () => console.log("hello world"),
    },
    {
      image: Logo.src,
      tooltip: "Settings",
      onClick: () => console.log("hello world"),
    },
    {
      image: Logo.src,
      tooltip: "Profile",
      onClick: () => console.log("hello world"),
    },
  ];

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden",
        className
      )}
    >
      <div
        className={cn(
          "relative flex items-end gap-2 p-[4.8px] rounded-[18px] backdrop-blur-lg bg-glass border border-white/20 shadow-lg transition-all duration-300 ease-in-out",
          isDockHovered ? "px-5 scale-105" : ""
        )}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isAdjacent =
            activeIndex === index - 1 || activeIndex === index + 1;

          let translateX = "translate-x-0";
          if (activeIndex !== null) {
            if (index < activeIndex) {
              translateX = "-translate-x-3";
            } else if (index > activeIndex) {
              translateX = "translate-x-3";
            }
          }

          return (
            <div
              key={index}
              className={cn(
                "relative flex flex-col items-center transition-transform duration-300 ease-in-out",
                translateX
              )}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              {isActive && showTooltip && (
                <div className="absolute -top-17 px-3 py-1 rounded-md bg-glass-100 border text-white text-sm whitespace-nowrap z-10 border-white/20">
                  {item.tooltip}
                </div>
              )}
              <button
                onClick={item.onClick}
                className={cn(
                  "flex items-center justify-center size-12",
                  "transition-all duration-400 ease-[cubic-bezier(0.25, 1.2, 0.5, 1)]", // Smoother spring-like curve
                  isActive
                    ? "scale-160 z-10 -translate-y-4"
                    : isAdjacent
                    ? "scale-140 -translate-y-2 mx-1"
                    : activeIndex !== null &&
                      Math.abs(activeIndex - index) === 2
                    ? "scale-110 -translate-y-0.5"
                    : "scale-100"
                )}
              >
                <img
                  src={item.image || Logo.src}
                  alt={item.tooltip}
                  className="size-full"
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
