"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./HowItWorks.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import MouseGradientTextWhite from "./MouseGradientTextWhite";

const steps = [
    {
        id: 1,
        number: "1",
        title: "Personalized Fitness Plans",
        description: "Unlock custom fitness plans for fat loss and muscle gain",
        color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
        id: 2,
        number: "2",
        title: "Competitive Challenges",
        description: "Competitive challenges to push performance further.",
        color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
        id: 3,
        number: "3",
        title: "Diverse Workouts",
        description: "Diverse workouts for every fitness goal.",
        color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
        id: 4,
        number: "4",
        title: "Stay On Track",
        description: "Track your progress with real-time insights and performance data.",
        color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Update active step based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const stepIndex = Math.min(
                Math.floor(latest * steps.length),
                steps.length - 1
            );
            setActiveStep(stepIndex);
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <section ref={sectionRef} id="how-it-works" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <MouseGradientTextWhite className={styles.mainTitle}>
                        Smarter Training. Personalized <br />
                        Nutrition. Stronger Recovery.
                    </MouseGradientTextWhite>
                </div>

                <div className={styles.contentWrapper}>
                    {/* Left Side - Stacked Phone Cards */}
                    <div className={styles.cardsContainer}>
                        <div className={styles.stackedCards}>
                            {steps.map((step, index) => {
                                const isActive = activeStep === index;
                                const isPast = activeStep > index;
                                const isFuture = activeStep < index;

                                return (
                                    <motion.div
                                        key={step.id}
                                        className={styles.phoneCard}
                                        style={{
                                            zIndex: isActive ? 100 : (isPast ? index : steps.length - index),
                                            background: step.color
                                        }}
                                        animate={{
                                            y: isPast ? -100 - (activeStep - index) * 20 : (isFuture ? (index - activeStep) * 15 : 0),
                                            x: isPast ? (activeStep - index) * 30 : (isFuture ? (index - activeStep) * -8 : 0),
                                            rotate: isPast ? (activeStep - index) * 8 : (isFuture ? (index - activeStep) * -3 : 0),
                                            scale: isActive ? 1 : (isPast ? 0.9 : 0.92 - (index - activeStep) * 0.03),
                                            opacity: isPast ? 0.3 : (isFuture ? 0.6 : 1),
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 25
                                        }}
                                    >
                                        <div className={styles.phoneNotch}></div>
                                        <div className={styles.phoneContent}>
                                            <div className={styles.stepBadge}>{step.number}</div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Content that changes */}
                    <div className={styles.textContent}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className={styles.stepContent}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{
                                    opacity: activeStep === index ? 1 : 0,
                                    x: activeStep === index ? 0 : 50,
                                    display: activeStep === index ? "block" : "none"
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                <div className={styles.stepNumber}>{step.number}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDescription}>{step.description}</p>
                                <a
                                    href="https://play.google.com/store/apps/details?id=com.rnsmkituidemoapp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.actionButton}
                                >
                                    Be Fit Now
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className={styles.scrollIndicator}>
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${activeStep === index ? styles.activeDot : ''}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
