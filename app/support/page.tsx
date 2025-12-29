"use client";

import Navbar from "@/components/Navbar";
import { NavigationProvider } from "@/contexts/NavigationContext";
import styles from './page.module.css';

export default function SupportPage() {
    return (
        <NavigationProvider>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
                <Navbar />
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Support & Help</h1>
                    
                    <div className={styles.intro}>
                        <p>We're here to assist you with any questions or concerns. Please feel free to reach out to us through any of the contact methods below, and we will respond to your inquiry as promptly as possible.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Get in Touch</h2>
                        <ul className={styles.list}>
                            <li>
                                <strong>Email:</strong> <a href="mailto:support@arthlete.fit" className={styles.emailLink}>support@arthlete.fit</a>
                            </li>
                            <li>
                                <strong>Contact Number:</strong> <a href="tel:+917208315878" className={styles.emailLink}>+91 7208315878</a>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Our Commitment</h2>
                        <p>We are dedicated to providing you with the best possible support experience. Whether you have questions about your account, need technical assistance, or want to share feedback, our team is ready to help.</p>
                    </div>
                </div>
            </div>
        </NavigationProvider>
    );
}

