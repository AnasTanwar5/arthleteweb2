"use client";

import { useRef, MouseEvent } from 'react';

interface MouseGradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export default function MouseGradientText({ children, className = '' }: MouseGradientTextProps) {
    const textRef = useRef<HTMLSpanElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLSpanElement>) => {
        if (!textRef.current) return;

        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update CSS variables for gradient position
        textRef.current.style.setProperty('--x', `${x}px`);
        textRef.current.style.setProperty('--y', `${y}px`);
    };

    const handleMouseEnter = () => {
        if (textRef.current) {
            textRef.current.style.setProperty('--opacity', '1');
        }
    };

    const handleMouseLeave = () => {
        if (textRef.current) {
            textRef.current.style.setProperty('--opacity', '0');
        }
    };

    return (
        <span
            ref={textRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ['--x' as any]: '0px',
                ['--y' as any]: '0px',
                ['--opacity' as any]: '0',
                position: 'relative',
                display: 'inline-block',
                background: `
                    radial-gradient(circle 150px at var(--x) var(--y), #6b7280 0%, transparent 100%),
                    linear-gradient(#111827, #111827)
                `,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            } as any}
        >
            {children}
        </span>
    );
}
