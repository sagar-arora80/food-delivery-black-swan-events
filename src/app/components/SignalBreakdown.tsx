"use client";
import React from 'react';
import { City, RiskSignal } from '../types';
import styles from './SignalBreakdown.module.css';

interface SignalBreakdownProps {
    city: City;
}

export default function SignalBreakdown({ city }: SignalBreakdownProps) {
    const renderSignalRow = (signal: RiskSignal) => (
        <div key={signal.id} className={styles.signalRow}>
            <div className={styles.signalInfo}>
                <span className={styles.signalName}>{signal.name}</span>
                <span className={styles.signalMeta}>Updated {signal.updatedAt}</span>
            </div>
            <div className={styles.signalValueGroup}>
                <span className={`${styles.signalValue} ${signal.status === 'Red' ? styles.textRed : signal.status === 'Amber' ? styles.textAmber : styles.textGreen}`}>
                    {signal.value}{signal.unit}
                </span>
                <span className={styles.signalTrend}>
                    {signal.trend === 'up' && '↑'}
                    {signal.trend === 'down' && '↓'}
                    {signal.trend === 'stable' && '→'}
                </span>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h3 className={styles.columnHeader}>External Signals</h3>
                <div className={styles.signalList}>
                    {city.signals.external.length > 0 ? city.signals.external.map(renderSignalRow) : <span className={styles.empty}>No active signals</span>}
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.columnHeader}>Supply Signals</h3>
                <div className={styles.signalList}>
                    {city.signals.supply.length > 0 ? city.signals.supply.map(renderSignalRow) : <span className={styles.empty}>No active signals</span>}
                </div>
            </div>

            <div className={styles.section}>
                <h3 className={styles.columnHeader}>Fulfilment Signals</h3>
                <div className={styles.signalList}>
                    {city.signals.fulfilment.length > 0 ? city.signals.fulfilment.map(renderSignalRow) : <span className={styles.empty}>No active signals</span>}
                </div>
            </div>
        </div>
    );
}
