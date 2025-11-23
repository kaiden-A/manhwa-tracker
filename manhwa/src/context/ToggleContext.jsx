import { createContext , useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({children}) => {

    const [openToggle , setOpenToggle] = useState(false);

    const toggleMenu = () => setOpenToggle(!openToggle);
    const close = () => setOpenToggle(false);

    return(
        <MenuContext.Provider value={{openToggle , toggleMenu , close}}>
            {children}
        </MenuContext.Provider>
    )
}