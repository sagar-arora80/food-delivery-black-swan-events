"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MOCK_CITIES } from '../mockData';
import { City } from '../types';

interface DashboardContextType {
    selectedCity: City | null;
    setSelectedCity: (city: City | null) => void;
    cities: City[];
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    isActionPanelOpen: boolean;
    setIsActionPanelOpen: (isOpen: boolean) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
    const [selectedCity, setSelectedCity] = useState<City | null>(MOCK_CITIES[0]); // Default to first city (Mumbai)
    const [cities] = useState<City[]>(MOCK_CITIES);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isActionPanelOpen, setIsActionPanelOpen] = useState(true);

    return (
        <DashboardContext.Provider value={{
            selectedCity,
            setSelectedCity,
            cities,
            isSidebarOpen,
            setIsSidebarOpen,
            isActionPanelOpen,
            setIsActionPanelOpen
        }}>
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboard() {
    const context = useContext(DashboardContext);
    if (context === undefined) {
        throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
}
