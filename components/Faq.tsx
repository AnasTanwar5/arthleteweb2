"use client";

import { useState } from "react";
import styles from "./Faq.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MouseGradientText from "./MouseGradientText";

const faqs = [
    {
        question: "How does the AI motion tracking work?",
        answer: "Arthlete uses your device’s camera and AI-powered computer vision to detect and analyze body movements in real time. It delivers instant workout feedback, posture correction, and form analysis to help you improve alignment, prevent injuries, and complete cleaner reps—no wearables or sensors required."
    },
    {
        question: "Do I need any equipment to use Arthlete?",
        answer: "Nope! All you need is your smartphone or laptop with a camera. Arthlete is built for equipment-free home workouts using AI-powered motion tracking, though you can add dumbbells or resistance bands to level up strength training and fat loss."
    },
    {
        question: "Can I use Arthlete for free?",
        answer: "Yes! We offer a free version with essential fitness features and basic workout tracking. Premium tools like advanced AI motion tracking, personalized workout plans, and custom nutrition coaching are available through our paid subscription options."
    },
    {
        question: "How are winners selected in the weekly challenges?",
        answer: "Winners are ranked based on consistent workout activity, clean rep execution, and fitness challenge streaks. Top performers climb the real-time leaderboard and earn credit points to unlock exclusive fitness rewards and perks."
    },
    {
        question: "Is my workout data private?",
        answer: "Absolutely! Your personal fitness data is end-to-end encrypted and never sold or shared without your explicit consent. You’re always in control of your health information and workout insights."
    },
    {
        question: "Does Arthlete record or store my camera footage?",
        answer: "No, Arthlete uses your device camera solely for real-time motion tracking and form analysis. It does not record, store, or upload any video footage—your fitness data and privacy are fully protected."
    },
    {
        question: "Is My Information Secure?",
        answer: "Absolutely! We use end-to-end encryption to protect your personal health and fitness data, and never share any information without your explicit consent."
    },
    {
        question: "Can I customize my workout and diet plan?",
        answer: "Yes! Arthlete personalizes your workout and diet plans based on your fitness goals, current fitness level, and dietary preferences. These AI-powered plans evolve automatically to support fat loss, muscle gain, and improved performance as you progress."
    },
    {
        question: "What is Focus Mode?",
        answer: "Focus Mode is a precision training feature where every rep must be clean and correctly executed to progress. Designed to build workout discipline, improve form accuracy, support muscle gain and fat loss, and boost real results—with higher credit points compared to regular training."
    },
    {
        question: "Can I use Arthlete in low-light or small spaces?",
        answer: "Good lighting ensures accurate motion tracking and posture correction—no need for a large workout space. Arthlete works perfectly for home workouts with minimal setup."
    }
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faqs" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <MouseGradientText className={styles.mainTitle}>
                        Frequently Asked Questions
                    </MouseGradientText>
                    <p className={styles.subTitle}>
                        Our all-in-one fitness platform empowers you to take control of your health journey with cutting-edge tools that simplify training, optimize performance, and make progress measurable — powered by AI, not guesswork
                    </p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            faq={faq}
                            isOpen={activeIndex === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FaqItem({ faq, isOpen, onClick }: { faq: any, isOpen: boolean, onClick: () => void }) {
    return (
        <div className={styles.faqItem}>
            <button className={styles.questionButton} onClick={onClick}>
                {faq.question}
                <ChevronDown className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={styles.answerContainer}
                    >
                        <div className={styles.answer}>
                            {faq.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
