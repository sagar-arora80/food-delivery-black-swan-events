"use client";
import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import styles from './ActionPanel.module.css';

export default function ActionPanel() {
    const { selectedCity, isActionPanelOpen, setIsActionPanelOpen } = useDashboard();

    if (!isActionPanelOpen) {
        return (
            <aside className={`${styles.panel} ${styles.collapsed}`}>
                <button
                    className={styles.toggleBtn}
                    onClick={() => setIsActionPanelOpen(true)}
                    title="Expand Panel"
                >
                    ‹
                </button>
            </aside>
        )
    }

    if (!selectedCity) {
        return <div className={styles.panel}>Select a city to view actions</div>;
    }

    return (
        <aside className={styles.panel}>
            <button
                className={styles.toggleBtn}
                style={{ right: 'auto', left: -12, top: 20 }}
                onClick={() => setIsActionPanelOpen(false)}
                title="Collapse Panel"
            >
                ›
            </button>

            <div className={styles.header}>
                <h2 className={styles.title}>Ops Actions</h2>
                <span className={styles.cityName}>{selectedCity.name}</span>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Intervention</h3>
                <div className={styles.buttonGroup}>
                    <div className={styles.actionWrapper}>
                        <button
                            className="btn btn-danger"
                            style={{ width: '100%' }}
                            title="Immediately raise the city's risk score to 100 and trigger Red protocols."
                        >
                            Escalate to Red
                        </button>
                        <span className={styles.helpText}>Forces max risk state. Use for confirmed disasters.</span>
                    </div>

                    <div className={styles.actionWrapper}>
                        <button
                            className="btn btn-ghost"
                            style={{ width: '100%', border: '1px solid var(--border-medium)' }}
                            title="Reduce risk score by 1 level (e.g., Red -> Amber)."
                        >
                            De-escalate
                        </button>
                        <span className={styles.helpText}>Lowers risk band if signals are stabilizing.</span>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Automation Control</h3>
                <div className={styles.controlRow} title="Stop all automated triggers (surge, incentives) from firing.">
                    <span>Pause All</span>
                    <input type="checkbox" />
                </div>
                <span className={styles.helpText} style={{ marginTop: '0.5rem', display: 'block' }}>Prevents new triggers. Existing actions remain active.</span>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Override Notes</h3>
                <textarea
                    className={styles.textarea}
                    placeholder="Reason for intervention..."
                    rows={4}
                />
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Log Intervention</button>
            </div>
        </aside>
    );
}
