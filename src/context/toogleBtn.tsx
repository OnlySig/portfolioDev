import { ReactNode, createContext, useState } from "react"

type ToggleContextType = {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialState : ToggleContextType= {
    state: false,
    setState: ()=> {}
}

export const ToogleBtnContext = createContext<ToggleContextType>(initialState)
export const ToogleBtnProvider = ({ children } : { children: ReactNode }) => {
    const [state, setState] = useState(initialState.state)

    return (
        <ToogleBtnContext.Provider value={{ state, setState }}>
            { children }
        </ToogleBtnContext.Provider>
    )
}