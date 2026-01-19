"use client";
import React from 'react';
import { MOCK_TRIGGERS, MOCK_ACTIONS } from '../mockData';
import styles from './TriggerStatus.module.css';

export default function TriggerStatus() {
    return (
        <div className={styles.container}>
            <div className={styles.panel}>
                <h3 className={styles.title}>Active Triggers</h3>
                <div className={styles.list}>
                    {MOCK_TRIGGERS.map((trigger) => (
                        <div key={trigger.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <span className={styles.itemName}>{trigger.name}</span>
                                <span className={styles.timestamp}>{trigger.triggeredAt}</span>
                            </div>
                            <div className={styles.condition}>Condition: {trigger.condition}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.panel}>
                <h3 className={styles.title}>Playbook Actions</h3>
                <div className={styles.list}>
                    {MOCK_ACTIONS.map((action) => (
                        <div key={action.id} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <span className={styles.itemName}>{action.name}</span>
                                <span className={`${styles.statusBadge} ${action.status === 'Active' ? styles.statusActive : styles.statusPaused}`}>
                                    {action.status}
                                </span>
                            </div>
                            <div className={styles.meta}>{action.category} • {action.autoTriggered ? 'Auto' : 'Manual'}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
