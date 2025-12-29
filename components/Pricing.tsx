"use client";

import { useState, useEffect } from "react";
import styles from "./Pricing.module.css";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import MouseGradientText from "./MouseGradientText";

// India pricing (INR)
const indiaPlans = [
    {
        id: "monthly",
        price: "₹499",
        period: "/ month",
        name: "Monthly Plan",
        description: "Complete access to all features for one month.",
        subtext: "Price reduces by ₹10 for every 25 credits earned.",
        features: [
            "Full App Access",
            "Advanced Workouts",
            "Personalized Plans",
            "Progress Tracking"
        ],
        isHighlighted: true,
        tag: undefined
    },
    {
        id: "annual",
        price: "₹2,499",
        period: "/ year",
        name: "Annual Plan",
        description: "Enjoy full access for a year with savings of ₹500.",
        features: [
            "Everything in Monthly",
            "Premium Analytics",
            "Priority Support"
        ],
        isHighlighted: false,
        tag: "Popular"
    }
];

// International pricing (USD)
const usdPlans = [
    {
        id: "monthly",
        price: "$5.50",
        period: "/ month",
        name: "Monthly Plan",
        description: "Complete access to all features for one month.",
        subtext: "Special introductory price (reduced from $10.99).",
        features: [
            "Full App Access",
            "Advanced Workouts",
            "Personalized Plans",
            "Progress Tracking"
        ],
        isHighlighted: true,
        tag: undefined
    },
    {
        id: "annual",
        price: "$40",
        period: "/ year",
        name: "Annual Plan",
        description: "Enjoy full access for a year with maximum savings.",
        features: [
            "Everything in Monthly",
            "Premium Analytics",
            "Priority Support"
        ],
        isHighlighted: false,
        tag: "Popular"
    }
];

// Function to detect if user is in India
function isIndiaTimezone(): boolean {
    if (typeof window === 'undefined') return false;
    
    try {
        // Check timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (timezone === 'Asia/Kolkata') {
            return true;
        }
        
        // Check locale
        const locale = Intl.DateTimeFormat().resolvedOptions().locale;
        if (locale.toLowerCase().includes('in')) {
            return true;
        }
        
        // Check timezone offset (IST is UTC+5:30)
        const offset = new Date().getTimezoneOffset();
        // IST offset is -330 minutes (5.5 hours ahead of UTC)
        if (offset === -330) {
            return true;
        }
        
        return false;
    } catch (e) {
        // Default to USD if detection fails
        return false;
    }
}

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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

export default function Pricing() {
    const [isIndia, setIsIndia] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Detect location on client side
        const detected = isIndiaTimezone();
        setIsIndia(detected);
        setIsLoading(false);
    }, []);

    // Use India plans if in India, otherwise use USD plans
    const plans = isIndia ? indiaPlans : usdPlans;

    return (
        <section id="pricing" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <MouseGradientText className={styles.mainTitle}>
                        Unlock your fitness journey
                    </MouseGradientText>
                    <p className={styles.subTitle}>Choose the plan that fits your fitness journey</p>
                </div>

                {!isLoading && (
                    <motion.div
                        className={styles.grid}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {plans.map((plan) => (
                            <PricingCard key={plan.id} plan={plan} />
                        ))}
                    </motion.div>
                )}

                <div className={styles.startBtnContainer}>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.rnsmkituidemoapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.centralCtaButton}
                    >
                        Start My Fitness Journey
                    </a>
                </div>
            </div>
        </section>
    );
}

function PricingCard({ plan }: { plan: any }) {
    // Determine styles based on highlight
    const cardStyle = plan.isHighlighted ? styles.cardPopular : styles.cardDefault;
    const hoverBg = plan.isHighlighted ? "#262626" : "#f5f5f5";

    return (
        <motion.div
            className={`${styles.card} ${cardStyle}`}
            variants={cardVariants}
            whileHover={{
                y: -12,
                backgroundColor: hoverBg,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            {/* Tags */}
            {plan.tag && (
                <div className={plan.tag === "Popular" ? styles.popularTag : styles.flexipayTag}>
                    {plan.tag}
                </div>
            )}


            <div className={styles.priceHeader}>
                <div>
                    <span className={styles.price}>{plan.price}</span>
                    <span className={styles.period}>{plan.period}</span>
                </div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                {plan.subtext && (
                    <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '1rem' }}>
                        {plan.subtext}
                    </p>
                )}
            </div>

            <ul className={styles.featuresList}>
                {plan.features.map((feature: string, i: number) => (
                    <li key={i} className={styles.featureItem}>
                        <Check className={styles.checkIcon} />
                        {feature}
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}
