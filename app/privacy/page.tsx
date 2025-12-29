"use client";

import Navbar from "@/components/Navbar";
import { NavigationProvider } from "@/contexts/NavigationContext";
import styles from './page.module.css';

export default function PrivacyPage() {
    return (
        <NavigationProvider>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
                <Navbar />
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.effectiveDate}>Effective Date: 24 July 2025</p>
                    
                    <div className={styles.intro}>
                        <p>Arthlete respects your privacy. This Privacy Policy explains how we handle your data when you use our mobile application (Arthlete). By using our app, you agree to the terms outlined below.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                        <ul className={styles.list}>
                            <li><strong>Personal Information:</strong> Name and email when you sign up.</li>
                            <li><strong>Health and Fitness Data:</strong> Body movement and workout data to help track your exercises and provide guidance.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                        <ul className={styles.list}>
                            <li>Track workouts and provide real-time feedback.</li>
                            <li>Improve your fitness experience and progress tracking.</li>
                            <li>Communicate with you about updates, reminders, and support.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. How We Share Your Information</h2>
                        <p>We do not sell your data.</p>
                        <p>We only share your data in these cases:</p>
                        <ul className={styles.list}>
                            <li>With trusted service providers who help us operate our app (e.g., for cloud storage).</li>
                            <li>If required by law.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Data Security</h2>
                        <p>We take appropriate steps to secure your information and keep it private.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Your Rights</h2>
                        <ul className={styles.list}>
                            <li>You can request deletion of your account and all your data anytime by contacting us at <a href="mailto:support@arthlete.fit" className={styles.emailLink}>support@arthlete.fit</a>.</li>
                            <li>You may also contact us to update or correct your personal data.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Children's Privacy</h2>
                        <p>Arthlete is not designed for children under 13, and we do not knowingly collect data from them.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy and will notify you via the app or email when changes are made.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Contact Us</h2>
                        <p>If you have any questions or requests regarding your data, contact us:</p>
                        <p className={styles.contactInfo}>
                            Email: <a href="mailto:support@arthlete.fit" className={styles.emailLink}>support@arthlete.fit</a>
                        </p>
                    </div>
                </div>
            </div>
        </NavigationProvider>
    );
}

