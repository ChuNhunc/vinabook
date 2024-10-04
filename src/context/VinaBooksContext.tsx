import { createContext } from "react";
import { Store } from "../store/Store";

export const VinaBooksContext = createContext<Store | undefined>(undefined);

export const VinaBooksProvider = ({ children }: { children: React.ReactNode }) => {
    const store = new Store();
    return (
        <VinaBooksContext.Provider value={store}>
            {children}
        </VinaBooksContext.Provider>
    )
};