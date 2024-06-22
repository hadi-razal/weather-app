"use client";

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { CityCoordinates, delhi } from "@/data/locations";

interface LocationContextProps {
    selectedLocation: CityCoordinates | null;
    setSelectedLocation: Dispatch<SetStateAction<CityCoordinates | null>>;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState<CityCoordinates | null>(delhi);

    return (
        <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = (): LocationContextProps => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error("useLocation must be used within a LocationProvider");
    }
    return context;
};
