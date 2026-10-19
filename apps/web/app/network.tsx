"use client";
import { useEffect, useRef, useState } from "react";
const nodes = [
  [80, 190],
  [170, 90],
  [180, 280],
  [285, 170],
  [320, 60],
  [345, 320],
  [440, 120],
  [460, 250],
  [550, 185],
];
const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 5],
  [3, 4],
  [3, 5],
  [3, 6],
  [3, 7],
  [4, 6],
  [5, 7],
  [6, 7],
  [6, 8],
  [7, 8],
];
export default function Network() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const visual = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const svg = visual.current;
    if (!svg) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    const sync = () => {
      if (visible && !document.hidden && !motion.matches)
        svg.unpauseAnimations();
      else svg.pauseAnimations();
    };
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      sync();
    });
    observer.observe(svg);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return (
    <div
      className="network"
      onPointerMove={(e) => {
        if (
          matchMedia("(prefers-reduced-motion: reduce)").matches ||
          e.pointerType === "touch"
        )
          return;
        const r = e.currentTarget.getBoundingClientRect();
        setOffset({
          x: (e.clientX - r.left - r.width / 2) / 45,
          y: (e.clientY - r.top - r.height / 2) / 45,
        });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      <svg
        ref={visual}
        viewBox="0 0 630 390"
        role="img"
        aria-label="An illustrated computational network of connected nodes"
      >
        <g style={{ transform: `translate(${offset.x}px,${offset.y}px)` }}>
          {edges.map(([a, b], i) => (
            <g key={i}>
              <line
                x1={nodes[a][0]}
                y1={nodes[a][1]}
                x2={nodes[b][0]}
                y2={nodes[b][1]}
              />
              <circle className="signal" r="2">
                <animateMotion
                  dur={`${8 + (i % 4)}s`}
                  begin={`${i * 0.7}s`}
                  repeatCount="indefinite"
                  path={`M${nodes[a].join(",")} L${nodes[b].join(",")}`}
                />
              </circle>
            </g>
          ))}
          {nodes.map(([x, y], i) => (
            <g key={i} className="network-node">
              <circle
                cx={x}
                cy={y}
                r={i === 3 ? 24 : 13}
                className="node-ring"
              />
              <circle cx={x} cy={y} r={i === 3 ? 5 : 3} />
              <text x={x + 19} y={y + 5}>
                {
                  [
                    "INPUT",
                    "LEARN",
                    "BUILD",
                    "SYSTEM",
                    "MODEL",
                    "LOGIC",
                    "CONTEXT",
                    "OUTPUT",
                    "REFINE",
                  ][i]
                }
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
