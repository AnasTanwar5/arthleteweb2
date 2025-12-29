"use client";

import Navbar from "@/components/Navbar";
import { NavigationProvider } from "@/contexts/NavigationContext";
import styles from './page.module.css';

export default function RefundCancellationPage() {
    return (
        <NavigationProvider>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
                <Navbar />
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Refund & Cancellation Policy</h1>
                    <p className={styles.effectiveDate}>Effective Date: 24 July 2025</p>
                    
                    <div className={styles.intro}>
                        <p>At Arthlete, we strive to provide the best possible experience for our users. Before making any purchase, we recommend reviewing the details carefully. By subscribing to our services, you agree to the terms of this Refund & Cancellation Policy.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Subscription Cancellation</h2>
                        <ul className={styles.list}>
                            <li>All subscription plans are non-cancellable once the payment has been successfully processed.</li>
                            <li>You will continue to have access to the premium features until the end of your current billing cycle.</li>
                            <li>Users can choose not to renew their subscription after the current term ends.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. Refund Policy</h2>
                        <ul className={styles.list}>
                            <li>We do not offer refunds for any subscription plans once payment has been made.</li>
                            <li>Refunds will not be provided for partial usage, unused features, or accidental purchases.</li>
                            <li>Please ensure you understand the features and terms before subscribing to any paid plan.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Exceptions</h2>
                        <p>In rare cases, if you believe you were wrongly charged or there was an error in billing, please contact us within 7 days of the transaction. Our team will review the case and assist you accordingly.</p>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Contact Us</h2>
                        <p>For any questions or concerns regarding this policy, you can reach us at:</p>
                        <p className={styles.contactInfo}>
                            Email: <a href="mailto:support@arthlete.fit" className={styles.emailLink}>support@arthlete.fit</a>
                        </p>
                    </div>
                </div>
            </div>
        </NavigationProvider>
    );
}

