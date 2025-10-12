import React, { useEffect, useState, useRef, useMemo } from 'react';
const GRADIENT = 'url(#gridGradient)';
const NUM_LINES = 5;
const GRID_COLOR = GRADIENT;
const BASE_ANIMATION_DURATION = 800;
const ANIMATION_VARIANCE = 500; 
const STAGGER = 200;

const GridBackground: React.FC = () => {
    const [animate, setAnimate] = useState(false);

    // Store random durations in a ref so they don't change on rerender
    const durationsRef = useRef<number[]>([]);
    if (durationsRef.current.length === 0) {
        for (let i = 0; i < NUM_LINES + 1; i++) {
            durationsRef.current.push(BASE_ANIMATION_DURATION + Math.floor(Math.random() * ANIMATION_VARIANCE));
        }
    }

    // Memoize line definitions and lengths
    const lineDefs = useMemo(() => {
        const defs = [];
        for (let i = 0; i < NUM_LINES; i++) {
            const offset = (i + 1) * (100 / (NUM_LINES - 1));
            const x1 = 100, y1 = offset - 45, x2 = 0, y2 = offset;
            defs.push({ x1, y1, x2, y2 });
        }
        for (let i = 2; i < 3; i++) {
            const offset = (i + 1) * (100 / (NUM_LINES + 1));
            const x1 = 0, y1 = offset - 45, x2 = 100, y2 = offset;
            defs.push({ x1, y1, x2, y2 });
        }
        return defs;
    }, []);

    const lineLengths = useMemo(() =>
        lineDefs.map(({ x1, y1, x2, y2 }) => Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))),
        [lineDefs]
    );

    useEffect(() => {
        const timeout = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timeout);
    }, []);

    const lines = lineDefs.map((def, i) => (
        <line
            key={i}
            x1={def.x1}
            y1={def.y1}
            x2={def.x2}
            y2={def.y2}
            stroke={GRID_COLOR}
            strokeWidth="0.2"
            style={{
                strokeDasharray: lineLengths[i],
                strokeDashoffset: animate ? 0 : lineLengths[i],
                transition: `stroke-dashoffset ${durationsRef.current[i]}ms linear ${i * STAGGER}ms`,
            }}
        />
    ));

    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
            aria-hidden="true"
        >
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
                {lines}
            </svg>
            
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ display: 'block', width: '100%', height: '100%' }}
            >
                <defs>
                    <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="var(--grid-start)" stopOpacity="var(--grid-opacity)"/>  {/* silvery gray */}
                    <stop offset="100%" stopColor="var(--grid-end)" stopOpacity="var(--grid-opacity)" /> {/* pure white */}
                    </linearGradient>
                </defs>
                {lines}
                </svg>
        </div>
    );
};

export default GridBackground;
