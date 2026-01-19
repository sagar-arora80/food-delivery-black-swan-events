"use client";
import React from 'react';
import { MOCK_LOGS } from '../mockData';
import styles from './EventTimeline.module.css';

export default function EventTimeline() {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>Live Event Log</h3>
            <div className={styles.timeline}>
                {MOCK_LOGS.map((log, index) => (
                    <div key={log.id} className={styles.event}>
                        <div className={styles.line} />
                        <div className={styles.dot} />
                        <div className={styles.content}>
                            <div className={styles.timeRow}>
                                <span className={styles.timestamp}>{log.timestamp}</span>
                                <span className={styles.actor}>{log.actor}</span>
                            </div>
                            <div className={styles.action}>{log.action}</div>
                            <div className={styles.outcome}>→ {log.outcome}</div>
                            {log.notes && <div className={styles.notes}>"{log.notes}"</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
