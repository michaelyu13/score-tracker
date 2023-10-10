import React from 'react';

export type AppContextType = {
    addButtonDisabled: boolean;
    setAddButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
    children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
    const [addButtonDisabled, setAddButtonDisabled] = React.useState<boolean>(true);

    return <AppContext.Provider value={{ addButtonDisabled, setAddButtonDisabled }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const appContext = React.useContext(AppContext);

    if (!appContext) throw new Error('You need to use this context inside a provider');

    return appContext;
};
