"use client";
import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const { isSidebarOpen, setIsSidebarOpen } = useDashboard();

    if (!isSidebarOpen) {
        return (
            <nav className={`${styles.sidebar} ${styles.collapsed}`}>
                <button
                    className={styles.toggleBtn}
                    onClick={() => setIsSidebarOpen(true)}
                    title="Expand Sidebar"
                >
                    ›
                </button>
            </nav>
        );
    }

    return (
        <nav className={styles.sidebar}>
            <button
                className={styles.toggleBtn}
                style={{ left: 'auto', right: -12, top: 20 }}
                onClick={() => setIsSidebarOpen(false)}
                title="Collapse Sidebar"
            >
                ‹
            </button>

            <div className={styles.logo}>
                <div className={styles.logoIcon} />
                <span className={styles.logoText}>OpsCenter</span>
            </div>

            <div className={styles.menu}>
                <div className={`${styles.menuItem} ${styles.active}`}>
                    Overview
                </div>
                <div className={styles.menuItem}>
                    Alerts
                </div>
                <div className={styles.menuItem}>
                    Playbooks
                </div>
                <div className={styles.menuItem}>
                    History
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.user}>
                    <div className={styles.avatar}>OA</div>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>Ops Agent</div>
                        <div className={styles.userRole}>On-Call</div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
