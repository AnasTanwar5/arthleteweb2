"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Scan, Utensils, Zap, Trophy, LucideIcon } from 'lucide-react';
import styles from './Features.module.css';
import MouseGradientText from './MouseGradientText';

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    bgClass: string; // Style class for blob shape
    bgColor: string; // Inline color for blob background
    iconColor: string;
}

const features: Feature[] = [
    {
        id: 1,
        title: "Smart Motion Tracking with AI",
        description: "Train smarter with AI-powered posture and motion tracking. This smart fitness app uses your device camera to correct form in real time—no wearables needed. Like having a personal trainer for every rep.",
        icon: Scan,
        bgClass: styles.blob1,
        bgColor: "#ffedd5", // Light Orange
        iconColor: "#ea580c", // Dark Orange
    },
    {
        id: 2,
        title: "Tailored Diet Plans for Fat Loss & Muscle Gain",
        description: "Fuel progress with personalized diet plans tailored to your body type, fitness goals, and lifestyle. Powered by AI, this nutrition tracker supports fat loss and muscle gain beyond the gym.",
        icon: Utensils,
        bgClass: styles.blob2,
        bgColor: "#ecfccb", // Light Lime
        iconColor: "#65a30d", // Lime 600
    },
    {
        id: 3,
        title: "Smart Workout Plans That Grow With You",
        description: "Your goals, your pace. Arthlete's adaptive engine builds personalized workout plans that evolve with your performance—supporting fat loss, muscle gain, and strength training without plateaus.",
        icon: Zap,
        bgClass: styles.blob3,
        bgColor: "#dbeafe", // Light Blue
        iconColor: "#2563eb", // Blue 600
    },
    {
        id: 4,
        title: "Fitness Challenges & Real-Time Leaderboards",
        description: "Crush fitness challenges, track workout streaks, and climb the leaderboard. Arthlete makes home workouts, fat loss, and strength training feel like a game—solo or with friends.",
        icon: Trophy,
        bgClass: styles.blob4,
        bgColor: "#dcfce7", // Light Green
        iconColor: "#16a34a", // Green 600
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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

export default function Features() {
    return (
        <section id="features" className={styles.featuresSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} feature={feature} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
    return (
        <motion.div
            className={styles.card}
            variants={cardVariants}
        >
            <div
                className={`${styles.iconWrapper} ${feature.bgClass}`}
                style={{ backgroundColor: feature.bgColor, color: feature.iconColor }}
            >
                <feature.icon size={32} />
            </div>
            <MouseGradientText className={styles.title}>
                {feature.title}
            </MouseGradientText>
            <p className={styles.description}>
                {feature.description}
            </p>
        </motion.div>
    );
};
