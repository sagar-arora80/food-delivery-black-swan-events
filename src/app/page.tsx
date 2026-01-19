"use client";
import { useDashboard } from './context/DashboardContext';
import RiskHeatmap from './components/RiskHeatmap';
import SignalBreakdown from './components/SignalBreakdown';
import TriggerStatus from './components/TriggerStatus';
import EventTimeline from './components/EventTimeline';
import RiskScoreCard from './components/RiskScoreCard';
import styles from './page.module.css';

export default function Home() {
  const { selectedCity } = useDashboard();

  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.topSection}>
        <RiskHeatmap />
      </section>

      {selectedCity && (
        <>
          <div className={styles.divider} />
          <section className={styles.detailSection}>
            <h2 className={styles.sectionHeader}>Deep Dive: {selectedCity.name}</h2>
            <RiskScoreCard city={selectedCity} />
            <div className={styles.detailGrid}>
              <div className={styles.mainColumn}>
                <SignalBreakdown city={selectedCity} />
                <TriggerStatus />
              </div>
              <div className={styles.sideColumn}>
                <EventTimeline />
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
