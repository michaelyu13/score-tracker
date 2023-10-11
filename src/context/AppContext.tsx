import React from 'react';

export type AppContextType = {
    dataUsed: string;
    setDataUsed: React.Dispatch<React.SetStateAction<string>>;
    helperText: string;
    setHelperText: React.Dispatch<React.SetStateAction<string>>;
    isAddButtonDisabled: boolean;
    setIsAddButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    formHasErrors: boolean;
    setFormHasErrors: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = React.createContext<AppContextType | null>(null);

type Props = {
    children: React.ReactNode;
};

export const AppContextProvider = ({ children }: Props) => {
    const [dataUsed, setDataUsed] = React.useState<string>('');
    const [helperText, setHelperText] = React.useState<string>('');
    const [isAddButtonDisabled, setIsAddButtonDisabled] = React.useState<boolean>(true);
    const [formHasErrors, setFormHasErrors] = React.useState<boolean>(false);

    return (
        <AppContext.Provider
            value={{
                dataUsed,
                setDataUsed,
                helperText,
                setHelperText,
                isAddButtonDisabled,
                setIsAddButtonDisabled,
                formHasErrors,
                setFormHasErrors,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const appContext = React.useContext(AppContext);

    if (!appContext) throw new Error('You need to use this context inside a provider');

    return appContext;
};
