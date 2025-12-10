"use client";

import styles from "./HowItWorks.module.css";
import { motion } from "framer-motion";
import MouseGradientTextWhite from "./MouseGradientTextWhite";

const steps = [
    {
        id: 1,
        number: "1",
        title: "Personalized Nutrition Plans",
        description: "Unlock custom nutrition plans for fat loss and muscle gain",
        buttonText: "Be Fit Now",
        imagePlaceholder: "Nutrition UI Placeholder"
    },
    {
        id: 2,
        number: "2",
        title: "Dynamic Meal Suggestions",
        description: "Enjoy meals recommended and optimized based on your workout goals, recovery needs, and personalized nutrition plan.",
        imagePlaceholder: "Meal Suggestions UI Placeholder"
    },
    {
        id: 3,
        number: "3",
        title: "Focus Mode & Form Precision",
        description: "Master every move with perfect form. Arthlete's AI-powered personal trainer delivers real-time rep-wise correction.",
        imagePlaceholder: "Focus Mode UI Placeholder"
    },
    {
        id: 4,
        number: "4",
        title: "Stay On Track",
        description: "Build better fitness routines, improve sleep quality, reduce workout stress, and stay mentally strong for long-term health.",
        buttonText: "Be Fit Now",
        imagePlaceholder: "Tracking UI Placeholder"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring" as const,
            stiffness: 50,
            damping: 20
        }
    }
};

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <MouseGradientTextWhite className={styles.mainTitle}>
                        Smarter Training. Personalized <br />
                        Nutrition. Stronger Recovery.
                    </MouseGradientTextWhite>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {steps.map((step, index) => (
                        <StepRow key={step.id} step={step} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const StepRow = ({ step, index }: { step: any, index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`${styles.stepRow} ${!isEven ? styles.stepRowReverse : ''}`}
            variants={itemVariants}
        >
            <div className={styles.contentSide}>
                <div className={styles.stepNumber}>{step.number}</div>
                <MouseGradientTextWhite as="h3" className={styles.stepTitle}>
                    {step.title}
                </MouseGradientTextWhite>
                <p className={styles.stepDescription}>{step.description}</p>
                {step.buttonText && (
                    <a
                        href="https://play.google.com/store/apps/details?id=com.rnsmkituidemoapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionButton}
                    >
                        {step.buttonText}
                    </a>
                )}
            </div>

            <div className={styles.imageSide}>
                <div className={styles.placeholderImage}>
                    {/* 
                      TODO: REPLACE THIS DIV WITH YOUR IMAGE
                      Example:
                      <Image 
                        src="/your-image.png" 
                        alt={step.title} 
                        width={400} 
                        height={800} 
                        className="rounded-3xl"
                      />
                    */}
                    {step.imagePlaceholder}
                </div>
            </div>
        </motion.div>
    );
};
