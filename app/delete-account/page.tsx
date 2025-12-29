"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { NavigationProvider } from "@/contexts/NavigationContext";
import styles from './page.module.css';

export default function DeleteAccountPage() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle account deletion logic here
        console.log("Delete account for:", email);
    };

    return (
        <NavigationProvider>
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 2000 }}>
                <Navbar />
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.content}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Delete Your Account</h1>
                        <p className={styles.instructionText}>
                            Please enter your email to confirm account deletion.
                        </p>
                        
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className={styles.emailInput}
                                required
                            />
                            
                            <button type="submit" className={styles.deleteButton}>
                                <svg 
                                    width="16" 
                                    height="16" 
                                    viewBox="0 0 16 16" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={styles.trashIcon}
                                >
                                    <path 
                                        d="M2 4h12M5.333 4V2.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334V4m2 0v9.333a1.333 1.333 0 0 1-1.334 1.334H4.667a1.333 1.333 0 0 1-1.334-1.334V4h9.334zM6.667 7.333v4M9.333 7.333v4" 
                                        stroke="currentColor" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Delete Account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </NavigationProvider>
    );
}

