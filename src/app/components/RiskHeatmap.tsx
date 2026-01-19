"use client";
import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import styles from './RiskHeatmap.module.css';
import { City } from '../types';

export default function RiskHeatmap() {
    const { cities, selectedCity, setSelectedCity, isSidebarOpen, setIsSidebarOpen, isActionPanelOpen, setIsActionPanelOpen } = useDashboard();

    const getRiskColor = (band: string) => {
        switch (band) {
            case 'Red': return 'var(--color-red-50)';
            case 'Amber': return 'var(--color-amber-50)';
            case 'Green': return 'var(--color-green-50)';
            default: return 'transparent';
        }
    };

    const getRiskBorder = (band: string) => {
        switch (band) {
            case 'Red': return 'var(--color-red-600)';
            case 'Amber': return 'var(--color-amber-500)';
            case 'Green': return 'var(--color-green-600)';
            default: return 'var(--border-light)';
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    {!isSidebarOpen && (
                        <button
                            className={styles.iconBtn}
                            onClick={() => setIsSidebarOpen(true)}
                            title="Open Navigation"
                        >
                            ☰
                        </button>
                    )}
                    <h1 className={styles.title}>City Risk Overview</h1>
                </div>

                <div className={styles.controls}>
                    {!isActionPanelOpen && (
                        <button
                            className="btn btn-primary"
                            onClick={() => setIsActionPanelOpen(true)}
                        >
                            Open Ops Actions
                        </button>
                    )}
                    <button className="btn btn-ghost">Sort by Risk</button>
                    <button className="btn btn-ghost">Filter</button>
                </div>
            </header>

            <div className={styles.grid}>
                {cities.map((city) => (
                    <div
                        key={city.id}
                        className={`${styles.card} ${selectedCity?.id === city.id ? styles.selected : ''}`}
                        onClick={() => setSelectedCity(city)}
                        style={{
                            backgroundColor: getRiskColor(city.riskBand),
                            borderColor: selectedCity?.id === city.id ? 'var(--text-primary)' : 'transparent'
                        }}
                    >
                        <div className={styles.cardHeader}>
                            <span className={styles.cityName}>{city.name}</span>
                            <span className={styles.lastUpdated}>{city.lastUpdated}</span>
                        </div>

                        <div className={styles.scoreRow}>
                            <div
                                className={styles.scoreBadge}
                                style={{ color: getRiskBorder(city.riskBand) }}
                            >
                                {city.riskScore}
                            </div>
                            <div className={styles.trendInfo}>
                                <span className={styles.riskLabel} style={{ color: getRiskBorder(city.riskBand) }}>
                                    {city.riskBand.toUpperCase()}
                                </span>
                                <span className={styles.trendArrow}>
                                    {city.trend === 'up' && '↑ Trend Up'}
                                    {city.trend === 'down' && '↓ Trend Down'}
                                    {city.trend === 'stable' && '→ Stable'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
