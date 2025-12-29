import { createContext, useContext, useState, useCallback } from "react";

export type TocEntry = {
    id: string;
    text: string;
    level: 1 | 2 | 3;
};

type TocContextType = {
    entries: TocEntry[];
    register: (entry: TocEntry) => void;
};

const TocContext = createContext<TocContextType | null>(null);

export const useToc = () => {
    const context = useContext(TocContext);
    if (!context) throw new Error("useToc must be used within TocProvider");
    return context;
};

export function TocProvider({ children }: { children: React.ReactNode }) {
    const [entries, setEntries] = useState<TocEntry[]>([]);

    const register = useCallback((entry: TocEntry) => {
        setEntries(prev => {
            if (prev.find(e => e.id === entry.id)) return prev;
            return [...prev, entry];
        });
    }, []);

    return (
        <TocContext.Provider value={{ entries, register }}>
            {children}
        </TocContext.Provider>
    );
}
