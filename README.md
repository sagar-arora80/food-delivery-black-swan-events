# Black Swan Ops Dashboard

**Deployment-ready Internal Ops & Platform Dashboard** designed for rapid response and decision-making during high-severity "Black Swan" events (e.g., extreme weather, supply shocks, civil unrest).

This dashboard prioritizes **"Signal over Noise"**, providing Ops Managers with a single source of truth to assess risks, monitor automated triggers, and intervene manually when necessary.

![Dashboard Preview](https://github.com/sagar-arora80/food-delivery-black-swan-events/raw/main/screenshot.png)
*(Note: Replace with actual screenshot path if available, or upload one to the repo)*

---

## 🚀 Key Features

### 1. 🌍 City Risk Overview
- **Real-time Risk Heatmap**: Instantly identify critical zones. Cities are ranked by Risk Score (0-100) and color-coded.
  - **RED**: Critical Intervention Needed
  - **AMBER**: Watchlist / Monitoring
  - **GREEN**: Normal Operations
- **Trend Indicators**: Visual cues (↑ ↓ →) to show if risk is escalating or stabilizing.

### 2. 🔍 Deep Dive Inspection
- **Composite Risk Score**: A transparent calculation based on multiple weighted signals.
- **Signal Breakdown**:
  - **External**: Weather severity (Rainfall mm/h), civil alerts.
  - **Supply**: Partner/Rider online rates and cancellation spikes.
  - **Fulfilment**: SLA breaches and order delays.
- **Automation Transparency**: See exactly which system protocols (e.g., "High Rain Surge", "Incentive Boost") are currently active.

### 3. 🛡️ Operational Control (Action Panel)
- **One-Click Intervention**:
  - **Escalate to Red**: Manually force max-risk protocols.
  - **De-escalate**: Lower risk band when ground truth differs from system signals.
  - **Pause All**: Halt automated triggers during sensitive situations.
- **Context & Safety**: All actions include tooltips and explanations to prevent errors.

### 4. ⚡ "Incident Mode" Layout
- **Collapsible Navigation**: Maximize screen real estate by collapsing the sidebar and action panel.
- **Accessible Controls**: Large touch-targets (32px) for critical toggles.
- **Quick Actions**: Header-based controls ("Hamburger Menu", "Open Ops Actions") appear automatically in collapsed modes.

### 5. 📜 Event Timeline
- **Audit Trail**: A chronological log of every system trigger and human intervention.
- **Accountability**: Clearly distinguishes between *System Interactions* and *Ops Manager Actions*.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS Modules (scoped, performance-optimized, zero-runtime overhead).
- **Design System**: Custom "Neutral/Professional" palette with semantic risk colors.
- **State Management**: React Context API (`DashboardContext`).

---

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sagar-arora80/food-delivery-black-swan-events.git
    cd food-delivery-black-swan-events
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Open Dashboard**
    Visit `http://localhost:3000` in your browser.

---

## 📖 Usage Guide

1.  **Monitoring**: Watch the **Risk Heatmap** on the left. If a city turns **Red**, click it to select it.
2.  **Assessment**: Review the **Signal Breakdown** in the center. Is the risk driven by Rain? Supply shortage?
3.  **Intervention**: Open the **Ops Actions** panel (right).
    - If the system hasn't reacted yet, use **"Escalate to Red"**.
    - If the situation is resolved, use **"De-escalate"**.
4.  **Verification**: Check the **Event Timeline** at the bottom to ensure your action was logged.

---

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── RiskHeatmap.tsx     # Left Sidebar (City list)
│   │   ├── ActionPanel.tsx     # Right Sidebar (Controls)
│   │   ├── Sidebar.tsx         # Navigation Bar
│   │   ├── LayoutShell.tsx     # Responsive Grid Layout
│   │   └── ...                 # Signal cards, Timelines
│   ├── context/
│   │   └── DashboardContext.tsx # Global State (Selected City, Panels)
│   ├── layout.tsx              # Root Layout
│   └── page.tsx                # Main Page Composition
├── public/                     # Static assets
└── ...
```

---

## 📄 License

This project is for internal demonstration and prototyping purposes.
