export type RiskBand = 'Green' | 'Amber' | 'Red';

export type Trend = 'up' | 'down' | 'stable';

export interface RiskSignal {
  id: string;
  name: string;
  value: string | number;
  unit?: string;
  threshold?: string;
  status: RiskBand;
  trend: Trend;
  updatedAt: string; // ISO string
}

export interface City {
  id: string;
  name: string;
  riskScore: number;
  riskBand: RiskBand;
  trend: Trend;
  signals: {
    external: RiskSignal[];
    supply: RiskSignal[];
    fulfilment: RiskSignal[];
  };
  lastUpdated: string; // minutes ago or ISO
}

export interface Trigger {
  id: string;
  name: string;
  condition: string;
  triggeredAt: string;
  isActive: boolean;
}

export interface PlaybookAction {
  id: string;
  category: 'Consumer' | 'Partner' | 'Merchant';
  name: string;
  status: 'Active' | 'Paused';
  autoTriggered: boolean;
}

export interface ActionLog {
  id: string;
  timestamp: string;
  actor: 'System' | 'Ops' | 'Platform';
  action: string;
  outcome: string;
  notes?: string;
}
