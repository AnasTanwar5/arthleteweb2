"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type SectionId = 'hero' | 'features' | 'how-it-works' | 'pricing' | 'faqs';

interface NavigationContextType {
    currentSection: SectionId;
    previousSection: SectionId | null;
    navigateToSection: (sectionId: SectionId) => void;
    getSlideDirection: () => 'left' | 'right' | null;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const sectionOrder: SectionId[] = ['hero', 'features', 'how-it-works', 'pricing', 'faqs'];

export function NavigationProvider({ children }: { children: ReactNode }) {
    const [currentSection, setCurrentSection] = useState<SectionId>('hero');
    const [previousSection, setPreviousSection] = useState<SectionId | null>(null);

    const navigateToSection = (sectionId: SectionId) => {
        setPreviousSection(currentSection);
        setCurrentSection(sectionId);
    };

    const getSlideDirection = (): 'left' | 'right' | null => {
        if (!previousSection) return null;

        const currentIndex = sectionOrder.indexOf(currentSection);
        const previousIndex = sectionOrder.indexOf(previousSection);

        // Moving forward in the list = slide from left
        // Moving backward in the list = slide from right
        return currentIndex > previousIndex ? 'left' : 'right';
    };

    return (
        <NavigationContext.Provider value={{
            currentSection,
            previousSection,
            navigateToSection,
            getSlideDirection
        }}>
            {children}
        </NavigationContext.Provider>
    );
}

export function useNavigation() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within NavigationProvider');
    }
    return context;
}
