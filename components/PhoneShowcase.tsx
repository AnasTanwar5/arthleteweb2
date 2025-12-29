"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import styles from "./Hero.module.css";

export default function PhoneShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className={styles.phoneScrollSection}>
            <div className={styles.stickyWrapper}>

                <div className={styles.phoneContainer}>
                    <div className={styles.phoneFrame}>
                        {/* SCREEN 1: DASHBOARD */}
                        <div className={styles.phoneScreen}>
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
                        </div>

                        <div className={styles.notch}></div>
                    </div>

                    {/* --- FLOATING WIDGETS - COME OUT OF PHONE ON SCROLL --- */}

                    {/* 1. Davis Korsgaard (Top Left Corner) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={-420}
                        finalY={-250}
                        className={`${styles.widgetBase} ${styles.widgetDavis}`}
                    >
                        <div className={styles.davisAvatar}>
                            <Image src="/avatar_davis.png" width={64} height={64} alt="Davis" />
                        </div>
                        <div className={styles.widgetText}>
                            <h4>Davis Korsgaard</h4>
                            <p>Player wellness expert and Coach of the Year.</p>
                        </div>
                    </ScrollWidget>

                    {/* 2. Calories (Bottom Left Corner) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={-450}
                        finalY={300}
                        className={`${styles.widgetBase} ${styles.widgetCalories}`}
                    >
                        <span style={{ fontSize: '2rem' }}>🔥</span>
                        <div className={styles.widgetText}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Calories</p>
                            <p style={{ fontWeight: 'bold', color: '#111827', fontSize: '1rem' }}>180 kcal</p>
                        </div>
                    </ScrollWidget>

                    {/* 3. Leg Workouts (Left Edge - Upper Middle) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={-380}
                        finalY={-50}
                        className={`${styles.widgetBase} ${styles.widgetLegs}`}
                    >
                        <div className={styles.iconCircle}>🧘‍♀️</div>
                        <div className={styles.widgetText} style={{ textAlign: 'center' }}>
                            <h4>Leg Workouts</h4>
                            <p>1h 30 min</p>
                        </div>
                    </ScrollWidget>

                    {/* 4. Chart (Right Edge - Upper Middle - Away from navbar) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={420}
                        finalY={-80}
                        className={`${styles.widgetBase} ${styles.widgetsChart}`}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', width: '100%' }}>
                            <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#9ca3af' }}>Progress</span>
                        </div>
                        <div className={styles.chartBars}>
                            {[40, 60, 35, 70, 50, 80, 65].map((h, i) => (
                                <div key={i} className={styles.bar} style={{ height: `${h}%`, opacity: i > 3 ? 1 : 0.4 }} ></div>
                            ))}
                        </div>
                    </ScrollWidget>

                    {/* 6. Workout Streak (Left Edge - Lower Middle) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={-400}
                        finalY={200}
                        className={`${styles.widgetBase} ${styles.widgetStreak}`}
                    >
                        <span style={{ fontSize: '2rem' }}>🔥</span>
                        <div className={styles.widgetText}>
                            <p style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Streak</p>
                            <p style={{ fontWeight: 'bold', color: '#111827', fontSize: '1rem' }}>12 days</p>
                        </div>
                    </ScrollWidget>

                    {/* 7. Muscle Groups (Top Right Corner) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={500}
                        finalY={-280}
                        className={`${styles.widgetBase} ${styles.widgetMuscle}`}
                    >
                        <div className={styles.iconCircle}>💪</div>
                        <div className={styles.widgetText} style={{ textAlign: 'center' }}>
                            <h4>Muscle</h4>
                            <p>Chest & Arms</p>
                        </div>
                    </ScrollWidget>

                    {/* 8. Workout Images (Bottom Right Corner) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={450}
                        finalY={300}
                        className={`${styles.widgetBase} ${styles.widgetImages}`}
                    >
                        <div className={styles.avatarStack}>
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className={styles.stackedAvatar}>
                                    <Image src="/workout1.png" fill style={{ objectFit: 'cover' }} alt="user" />
                                </div>
                            ))}
                        </div>
                    </ScrollWidget>

                    {/* 9. Full Body (Right Edge - Middle) */}
                    <ScrollWidget
                        progress={scrollYProgress}
                        finalX={380}
                        finalY={120}
                        className={`${styles.widgetBase} ${styles.widgetFullBody}`}
                    >
                        <span style={{ fontSize: '1.75rem' }}>🏋️‍♂️</span>
                        <div className={styles.widgetText}>
                            <h4>Full body</h4>
                            <p>Workout focus</p>
                        </div>
                        <div style={{ width: '1.5rem', height: '1.5rem', borderRadius: '9999px', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0.5rem' }}>
                            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#22c55e' }}></div>
                        </div>
                    </ScrollWidget>

                </div>

            </div>
        </section>
    );
}

function ScrollWidget({
    children,
    className,
    progress,
    finalX,
    finalY
}: {
    children: React.ReactNode,
    className?: string,
    progress: MotionValue<number>,
    finalX: number,
    finalY: number
}) {
    // Widgets start from phone center (0, 0) and animate out as you scroll
    // They appear between 0.2 and 0.6 scroll progress
    const x = useTransform(progress, [0.2, 0.6], [0, finalX]);
    const y = useTransform(progress, [0.2, 0.6], [0, finalY]);
    const scale = useTransform(progress, [0.2, 0.6], [0.3, 1]);
    const opacity = useTransform(progress, [0.2, 0.6], [0, 1]);

    return (
        <motion.div
            style={{ x, y, scale, opacity }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
