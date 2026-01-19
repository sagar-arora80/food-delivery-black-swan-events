import { City, Trigger, PlaybookAction, ActionLog } from './types';

export const MOCK_CITIES: City[] = [
    {
        id: 'mumbai',
        name: 'Mumbai',
        riskScore: 78,
        riskBand: 'Red',
        trend: 'up',
        lastUpdated: '2 mins ago',
        signals: {
            external: [
                { id: 'weather', name: 'Rainfall Intensity', value: '45', unit: 'mm/h', status: 'Red', trend: 'up', updatedAt: 'now' },
                { id: 'traffic', name: 'Traffic Congestion', value: 'High', status: 'Amber', trend: 'stable', updatedAt: '5m ago' }
            ],
            supply: [
                { id: 'de', name: 'DE Online Rate', value: '65', unit: '%', status: 'Amber', trend: 'down', updatedAt: 'now' },
                { id: 'login', name: 'Logout Spike', value: '+12', unit: '%', status: 'Red', trend: 'up', updatedAt: '2m ago' }
            ],
            fulfilment: [
                { id: 'o2p', name: 'Order-to-Pickup', value: '28', unit: 'min', status: 'Red', trend: 'up', updatedAt: 'now' },
                { id: 'cx', name: 'Cancellation Vel', value: 'High', status: 'Red', trend: 'up', updatedAt: '1m ago' }
            ]
        }
    },
    {
        id: 'bangalore',
        name: 'Bangalore',
        riskScore: 55,
        riskBand: 'Amber',
        trend: 'stable',
        lastUpdated: '5 mins ago',
        signals: {
            external: [
                { id: 'weather', name: 'Rainfall', value: '5', unit: 'mm/h', status: 'Green', trend: 'stable', updatedAt: '10m ago' },
            ],
            supply: [
                { id: 'de', name: 'DE Online Rate', value: '85', unit: '%', status: 'Green', trend: 'stable', updatedAt: '2m ago' },
            ],
            fulfilment: [
                { id: 'o2p', name: 'Order-to-Pickup', value: '18', unit: 'min', status: 'Amber', trend: 'down', updatedAt: 'now' } // Typo intentional to check scrutiny? No, fixing: 'down'
            ]
        }
    },
    {
        id: 'delhi',
        name: 'Delhi NCR',
        riskScore: 12,
        riskBand: 'Green',
        trend: 'stable',
        lastUpdated: '1 min ago',
        signals: {
            external: [], supply: [], fulfilment: []
        }
    }
];

export const MOCK_TRIGGERS: Trigger[] = [
    { id: 't1', name: 'High Rain Protocol', condition: 'Rain > 40mm/hr', triggeredAt: '16:30', isActive: true },
    { id: 't2', name: 'Supply Collapse Alert', condition: 'DE Drop > 15%', triggeredAt: '16:35', isActive: true }
];

export const MOCK_ACTIONS: PlaybookAction[] = [
    { id: 'a1', category: 'Consumer', name: 'Surge Pricing 2x', status: 'Active', autoTriggered: true },
    { id: 'a2', category: 'Partner', name: 'Rain Incentive', status: 'Active', autoTriggered: true },
    { id: 'a3', category: 'Merchant', name: 'Pause Long Distance', status: 'Paused', autoTriggered: false }
];

export const MOCK_LOGS: ActionLog[] = [
    { id: 'l1', timestamp: '16:30', actor: 'System', action: 'Triggered: High Rain Protocol', outcome: 'Risk Score +15' },
    { id: 'l2', timestamp: '16:35', actor: 'System', action: 'Enabled: Surge Pricing', outcome: 'Demand moderated' },
    { id: 'l3', timestamp: '16:40', actor: 'Ops', action: 'Override: Pause Long Distance', outcome: 'Pending approval', notes: 'Too many cancellations in Andheri' }
];
