"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./Hero.module.css";
import MouseGradientText from "./MouseGradientText";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Section 1 Opacity (Fade out as we scroll to 0.4)
    const section1Opacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
    const section1PointerEvents = useTransform(scrollYProgress, (val) => val > 0.35 ? "none" : "auto");

    // Section 2 Opacity (Fade in from 0.4)
    const section2Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const section2PointerEvents = useTransform(scrollYProgress, (val) => val > 0.4 ? "auto" : "none");

    // Phone Content Transition
    const phoneScreen1Opacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);
    const phoneScreen2Opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

    // Section 2 Animations
    const leftTextX = useTransform(scrollYProgress, [0.4, 0.5], [-100, 0]);
    const rightWidgetX = useTransform(scrollYProgress, [0.4, 0.5], [100, 30]);
    const rightWidgetScale = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);

    return (
        <div ref={containerRef} className={styles.container}>

            <div className={styles.stickyWrapper}>

                {/* SECTION 1 HEADING */}
                <motion.div
                    style={{ opacity: section1Opacity, pointerEvents: section1PointerEvents }}
                    className={styles.headingWrapper}
                >
                    <MouseGradientText className={styles.heading}>
                        AI-powered motion<br />tracking for smarter<br />home workouts, fat loss,<br />and strength training
                    </MouseGradientText>
                </motion.div>

                {/* SECTION 2 CONTENT */}
                <motion.div
                    className={styles.section2TextWrapper}
                    style={{ opacity: section2Opacity, x: leftTextX, pointerEvents: section2PointerEvents }}
                >
                    <span className={styles.sectionBadge}>Your Goals</span>
                    <h2 className={styles.sectionHeading}>
                        <MouseGradientText>
                            Customized<br /><span>Workouts</span> for You
                        </MouseGradientText>
                    </h2>
                    <p className={styles.sectionDescription}>
                        Individualized programs are tailored specifically to your body, lifestyle, and fitness goals, ensuring every workout is optimized for you.
                    </p>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.rnsmkituidemoapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.blackButton}
                    >
                        Download App
                    </a>
                </motion.div>

                <motion.div
                    className={styles.widgetDream}
                    style={{ opacity: section2Opacity, x: rightWidgetX, scale: rightWidgetScale, pointerEvents: section2PointerEvents }}
                >
                    <div className={styles.dreamIcon}>😌</div>
                    <p className={styles.dreamText}>Transform Dreams Into Reality</p>
                </motion.div>

                <div className={styles.phoneContainer}>

                    <div className={styles.phoneFrame}>
                        {/* SCREEN 1: DASHBOARD */}
                        <motion.div className={styles.phoneScreen} style={{ opacity: phoneScreen1Opacity }}>
                            <div className={styles.phoneHeader}>
                                <div className={styles.phoneTitle}>Hey, Janet!</div>
                                <div className={styles.phoneAvatar}>
                                    <Image src="/avatar_davis.png" width={32} height={32} alt="Profile" />
                                </div>
                            </div>

                            <div className={styles.phoneBanner}>
                                <Image
                                    src="/workout1.png"
                                    fill
                                    alt="Workout"
                                    className={styles.phoneBannerImage}
                                    sizes="(max-width: 300px) 100vw, 300px"
                                />
                                <div className={styles.phoneOverlay}></div>

                                <div className={styles.badge}>BEGINNER</div>
                                <div className={styles.bannerText}>
                                    <h3 className={styles.bannerHeading}>5-Day<br />Strength<br />Boost</h3>
                                </div>
                            </div>

                            <a
                                href="https://play.google.com/store/apps/details?id=com.rnsmkituidemoapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.phoneButton}
                            >
                                Get Started
                            </a>
                        </motion.div>

                        {/* SCREEN 2: FITNESS PLAN */}
                        <motion.div className={styles.screen2} style={{ opacity: phoneScreen2Opacity }}>
                            <h3 className={styles.screen2Title}>Fitness<br /><span>Program<br />Plan</span></h3>

                            <div className={styles.trainerImageWrapper}>
                                {/* Placeholder for trainer image since generation failed */}
                                <div style={{ width: '100%', height: '100%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontSize: '3rem' }}>🧔🏻‍♂️</span>
                                </div>
                            </div>

                            <div className={styles.statRow}>
                                <div className={styles.statIcon}>👱‍♂️</div>
                                <div className={styles.statText}>
                                    <div className={styles.statValue}>5'11, 140 lbs</div>
                                    <div className={styles.statLabel}>Body assessment</div>
                                </div>
                                <div className={styles.checkMark}>✓</div>
                            </div>

                            <div className={styles.statRow}>
                                <div className={styles.statIcon}>🔥</div>
                                <div className={styles.statText}>
                                    <div className={styles.statValue}>2 658 kcal</div>
                                    <div className={styles.statLabel}>Calorie estimate</div>
                                </div>
                            </div>

                            <div className={styles.statRow}>
                                <div className={styles.statIcon}>🏋️</div>
                                <div className={styles.statText}>
                                    <div className={styles.statValue}>Full body</div>
                                    <div className={styles.statLabel}>Workout focus</div>
                                </div>
                            </div>

                            <div className={styles.progressContainer}>
                                <div className={styles.progressPill}>24%</div>
                            </div>

                        </motion.div>

                        <div className={styles.notch}></div>
                    </div>


                    {/* --- FLOATING WIDGETS --- */}

                    {/* 1. Davis Korsgaard (Top Left) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={-320}
                        finalY={-200}
                        className={`${styles.widgetBase} ${styles.widgetDavis}`}
                        exitConfig={{ start: 0.35, end: 0.5 }}
                    >
                        <div className={styles.davisAvatar}>
                            <Image src="/avatar_davis.png" width={48} height={48} alt="Davis" />
                        </div>
                        <div className={styles.widgetText}>
                            <h4>Davis Korsgaard</h4>
                            <p>Player wellness expert and Coach of the Year.</p>
                        </div>
                    </ScrollWidget>

                    {/* 2. Calories (Bottom Left - Far) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={-400}
                        finalY={200}
                        className={`${styles.widgetBase} ${styles.widgetCalories}`}
                        exitConfig={{ start: 0.35, end: 0.5 }}
                    >
                        <span style={{ fontSize: '1.5rem' }}>🔥</span>
                        <div className={styles.widgetText}>
                            <p style={{ fontSize: '0.625rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Calories</p>
                            <p style={{ fontWeight: 'bold', color: '#111827' }}>180 kcal</p>
                        </div>
                    </ScrollWidget>

                    {/* 3. Leg Workouts (Bottom Left - Near) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={-200}
                        finalY={150}
                        className={`${styles.widgetBase} ${styles.widgetLegs}`}
                        exitConfig={{ start: 0.35, end: 0.5 }}
                    >
                        <div className={styles.iconCircle}>🧘‍♀️</div>
                        <div className={styles.widgetText} style={{ textAlign: 'center' }}>
                            <h4>Leg Workouts</h4>
                            <p>1h 30 min</p>
                        </div>
                    </ScrollWidget>

                    {/* 4. Chart (Top Right - Overlay) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={250}
                        finalY={-80}
                        className={`${styles.widgetBase} ${styles.widgetsChart}`}
                        exitConfig={{ start: 0.35, end: 0.5 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', width: '100%' }}>
                            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#9ca3af' }}>Progress</span>
                        </div>
                        <div className={styles.chartBars}>
                            {[40, 60, 35, 70, 50, 80, 65].map((h, i) => (
                                <div key={i} className={styles.bar} style={{ height: `${h}%`, opacity: i > 3 ? 1 : 0.4 }} ></div>
                            ))}
                        </div>
                    </ScrollWidget>

                    {/* 5. Workout Images (Far Right) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={380}
                        finalY={-180}
                        className={`${styles.widgetBase} ${styles.widgetImages}`}
                        exitConfig={{ start: 0.35, end: 0.5 }}
                    >
                        <div className={styles.avatarStack}>
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className={styles.stackedAvatar}>
                                    <Image src="/workout1.png" fill style={{ objectFit: 'cover' }} alt="user" />
                                </div>
                            ))}
                        </div>
                    </ScrollWidget>

                    {/* 6. Full Body (Bottom Right) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={300}
                        finalY={250}
                        className={`${styles.widgetBase} ${styles.widgetFullBody}`}
                        exitConfig={{ start: 0.35, end: 0.5 }}
                    >
                        <span style={{ fontSize: '1.25rem' }}>🏋️‍♂️</span>
                        <div className={styles.widgetText}>
                            <h4>Full body</h4>
                            <p>Workout focus</p>
                        </div>
                        <div style={{ width: '1.25rem', height: '1.25rem', borderRadius: '9999px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0.5rem' }}>
                            <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', backgroundColor: '#22c55e' }}></div>
                        </div>
                    </ScrollWidget>

                </div>

                <div className={styles.scrollHint}>
                    <p className={styles.scrollText}>Scroll to Explore</p>
                </div>
            </div>
        </div>
    );
}

function ScrollWidget({
    children,
    className,
    progress,
    finalX,
    finalY,
    exitConfig
}: {
    children: React.ReactNode,
    className?: string,
    progress: MotionValue<number>,
    finalX: number,
    finalY: number,
    exitConfig?: { start: number, end: number }
}) {
    // Entrance
    const x = useTransform(progress, [0, 0.4], [0, finalX]);
    const y = useTransform(progress, [0, 0.4], [0, finalY]);
    const scale = useTransform(progress, [0, 0.4], [0.2, 1]);

    // Exit (Optional)
    const opacity = useTransform(progress,
        exitConfig ? [0, 0.1, exitConfig.start, exitConfig.end] : [0, 0.1],
        exitConfig ? [0, 1, 1, 0] : [0, 1]
    );

    return (
        <motion.div
            style={{ x, y, scale, opacity }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
