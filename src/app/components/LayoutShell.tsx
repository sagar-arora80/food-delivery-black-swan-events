"use client";
import React from 'react';
import { useDashboard } from '../context/DashboardContext';
import Sidebar from './Sidebar';
import ActionPanel from './ActionPanel';
import styles from './LayoutShell.module.css';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const { isSidebarOpen, isActionPanelOpen } = useDashboard();

    // Dynamic grid template
    const gridTemplateColumns = `
    ${isSidebarOpen ? '240px' : '20px'} 
    1fr 
    ${isActionPanelOpen ? '300px' : '20px'}
  `.trim().replace(/\s+/g, ' ');

    return (
        <div className={styles.layoutGrid} style={{ gridTemplateColumns }}>
            <Sidebar />
            <main className={styles.mainContent}>
                {children}
            </main>
            <ActionPanel />
        </div>
    );
}
