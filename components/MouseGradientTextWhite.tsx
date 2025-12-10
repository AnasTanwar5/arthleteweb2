"use client";

import { useRef, MouseEvent } from 'react';

interface MouseGradientTextWhiteProps {
    children: React.ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function MouseGradientTextWhite({
    children,
    className = '',
    as: Component = 'h2'
}: MouseGradientTextWhiteProps) {
    const textRef = useRef<HTMLElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (!textRef.current) return;

        const rect = textRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        textRef.current.style.setProperty('--x', `${x}%`);
        textRef.current.style.setProperty('--y', `${y}%`);
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
        <Component
            ref={textRef as any}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ['--x' as any]: '50%',
                ['--y' as any]: '50%',
                ['--opacity' as any]: '0',
                position: 'relative',
                background: `
                    radial-gradient(circle 150px at var(--x) var(--y), #6b7280 0%, transparent 100%),
                    linear-gradient(#ffffff, #ffffff)
                `,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            } as any}
        >
            {children}
        </Component>
    );
}
