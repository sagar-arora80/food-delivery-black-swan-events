"use client";
import React from 'react';
import { City } from '../types';
import styles from './RiskScoreCard.module.css';

interface RiskScoreCardProps {
    city: City;
}

export default function RiskScoreCard({ city }: RiskScoreCardProps) {
    const getRiskColor = (band: string) => {
        switch (band) {
            case 'Red': return 'var(--color-red-600)';
            case 'Amber': return 'var(--color-amber-600)';
            case 'Green': return 'var(--color-green-600)';
            default: return 'var(--text-secondary)';
        }
    };

    const getRiskBg = (band: string) => {
        switch (band) {
            case 'Red': return 'var(--color-red-50)';
            case 'Amber': return 'var(--color-amber-50)';
            case 'Green': return 'var(--color-green-50)';
            default: return 'var(--bg-panel)';
        }
    };

    return (
        <div className={styles.card} style={{ backgroundColor: getRiskBg(city.riskBand) }}>
            <div className={styles.content}>
                <div className={styles.scoreGroup}>
                    <div className={styles.score} style={{ color: getRiskColor(city.riskBand) }}>
                        {city.riskScore}
                    </div>
                    <div className={styles.meta}>
                        <div className={styles.band} style={{ color: getRiskColor(city.riskBand) }}>
                            {city.riskBand.toUpperCase()} RISK
                        </div>
                        <div className={styles.info}>
                            Updated {city.lastUpdated}
                        </div>
                    </div>
                </div>
                <div className={styles.description}>
                    This score combines <strong>External</strong> (Weather), <strong>Supply</strong> (Partner availability), and <strong>Fulfilment</strong> (Delays) signals.
                </div>
            </div>
        </div>
    );
}
