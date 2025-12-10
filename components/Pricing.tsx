"use client";

import styles from "./Pricing.module.css";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import MouseGradientText from "./MouseGradientText";

const plans = [
    {
        id: "starter",
        price: "₹179",
        period: "/ 14 days",
        name: "Starter Plan",
        description: "Full access for 14 days to explore all features.",
        features: [
            "Full App Access",
            "Basic Workouts",
            "Progress Tracking"
        ],
        isHighlighted: false,
    },
    {
        id: "monthly",
        price: "₹499",
        period: "/ month",
        name: "Monthly Plan",
        description: "Complete access to all features for one month.",
        subtext: "Price reduces by ₹10 for every 25 credits earned.",
        features: [
            "Everything in Starter",
            "Advanced Workouts",
            "Personalized Plans"
        ],
        isHighlighted: true, // Black Background
        tag: "Flexipay Available" // Keeping this as a generic flexipay tag or removing? User mainly wanted popular on 3rd. Layout: Flexipay was usually on the highlighted one.
    },
    {
        id: "annual",
        price: "₹2,499",
        period: "/ year",
        name: "Annual Plan",
        description: "Enjoy full access for a year with savings of ₹500.",
        features: [
            "Everything in Monthly",
            "Premium Analytics"
        ],
        isHighlighted: false,
        tag: "Popular" // Moved here
    }
];

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
    return (
        <section id="pricing" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <MouseGradientText className={styles.mainTitle}>
                        Unlock your fitness journey
                    </MouseGradientText>
                    <p className={styles.subTitle}>Choose the plan that fits your fitness journey</p>
                </div>

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

            {/* Specific Flexipay for Monthly if needed, or stick to tag property logic. 
                User image showed "Flexipay Available" on the middle orange card, and "Popular" on the right card.
                I will manually add Flexipay if it's the middle card, separate from the 'tag' prop logic to avoid conflict/complexity.
            */}
            {plan.id === 'monthly' && (
                <div className={styles.flexipayTag}>Flexipay Available</div>
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
