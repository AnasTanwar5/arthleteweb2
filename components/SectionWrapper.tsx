"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '@/contexts/NavigationContext';
import { ReactNode, useEffect, useState } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    sectionId: 'hero' | 'features' | 'how-it-works' | 'pricing' | 'faqs';
}

export default function SectionWrapper({ children, sectionId }: SectionWrapperProps) {
    const { currentSection, previousSection, getSlideDirection } = useNavigation();
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Trigger re-render when this section becomes active
        if (currentSection === sectionId && previousSection && previousSection !== sectionId) {
            setKey(prev => prev + 1);
        }
    }, [currentSection, previousSection, sectionId]);

    const direction = getSlideDirection();
    const isActive = currentSection === sectionId;
    const wasActive = previousSection === sectionId;

    // Only animate if this section is being navigated to or from
    const shouldAnimate = (isActive && previousSection) || (wasActive && currentSection !== sectionId);

    const variants = {
        enter: (dir: 'left' | 'right' | null) => ({
            x: dir === 'left' ? '-100%' : dir === 'right' ? '100%' : 0,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir: 'left' | 'right' | null) => ({
            x: dir === 'left' ? '100%' : dir === 'right' ? '-100%' : 0,
            opacity: 0
        })
    };

    if (!shouldAnimate) {
        return <div style={{ width: '100%' }}>{children}</div>;
    }

    return (
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={key}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: { type: 'tween', duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.5 }
                }}
                style={{ width: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
