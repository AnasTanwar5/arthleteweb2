"use client";

import Navbar from "@/components/Navbar";
import { NavigationProvider } from "@/contexts/NavigationContext";
import styles from './page.module.css';

export default function TermsPage() {
    return (
        <NavigationProvider>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
                <Navbar />
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Terms & Conditions</h1>
                    <p className={styles.effectiveDate}>Effective Date: 24 July 2025</p>
                    
                    <div className={styles.intro}>
                        <p>Welcome to Arthlete! These Terms & Conditions ("Terms") govern your use of the Arthlete mobile application. By using our app, you agree to follow these Terms, so please read them carefully.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Use of the App</h2>
                        <ul className={styles.list}>
                            <li>You must be at least 13 years old to use Arthlete.</li>
                            <li>You agree to use the app only for lawful and intended purposes.</li>
                            <li>You are responsible for maintaining the confidentiality of your account login details.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. User Responsibilities</h2>
                        <ul className={styles.list}>
                            <li>You agree not to misuse or attempt to harm the functionality of the app.</li>
                            <li>You are responsible for any data you input and ensuring it is accurate and lawful.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Intellectual Property</h2>
                        <p>All content and features within the Arthlete app (including text, graphics, code, etc.) are the property of Arthlete and are protected by applicable intellectual property laws.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Health Disclaimer</h2>
                        <p>Arthlete provides fitness-related content and guidance. Always consult your doctor before beginning any exercise program. Arthlete is not a substitute for professional medical advice or supervision.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Termination</h2>
                        <p>We reserve the right to suspend or terminate your account if you violate these Terms or misuse the app in any way.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
                        <p>Arthlete is provided "as is." We are not liable for any indirect or direct damages resulting from your use of the app.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Changes to These Terms</h2>
                        <p>We may update these Terms from time to time. If we make significant changes, we will notify you through the app or by email.</p>
                    </div>

                    <div className={styles.refundSection}>
                        <h2 className={styles.refundSectionTitle}>8. Refund & Cancellation Policy</h2>
                        <div className={styles.refundIntro}>
                            <p>At Arthlete, we strive to provide the best possible experience for our users. Before making any purchase, we recommend reviewing the details carefully. By subscribing to our services, you agree to the terms of this Refund & Cancellation Policy.</p>
                        </div>
                        
                        <h3 className={styles.subsectionTitle}>8.1 Subscription Cancellation</h3>
                        <ul className={styles.list}>
                            <li>All subscription plans are non-cancellable once the payment has been successfully processed.</li>
                            <li>You will continue to have access to the premium features until the end of your current billing cycle.</li>
                            <li>Users can choose not to renew their subscription after the current term ends.</li>
                        </ul>

                        <h3 className={styles.subsectionTitle}>8.2 Refund Policy</h3>
                        <ul className={styles.list}>
                            <li>We do not offer refunds for any subscription plans once payment has been made.</li>
                            <li>Refunds will not be provided for partial usage, unused features, or accidental purchases.</li>
                            <li>Please ensure you understand the features and terms before subscribing to any paid plan.</li>
                        </ul>

                        <h3 className={styles.subsectionTitle}>8.3 Exceptions</h3>
                        <p>In rare cases, if you believe you were wrongly charged or there was an error in billing, please contact us within 7 days of the transaction. Our team will review the case and assist you accordingly.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us:</p>
                        <p className={styles.contactInfo}>
                            Email: <a href="mailto:support@arthlete.fit" className={styles.emailLink}>support@arthlete.fit</a>
                        </p>
                    </div>
                </div>
            </div>
        </NavigationProvider>
    );
}

