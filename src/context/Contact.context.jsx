import { createContext } from "react";

// create context
export const ContactContext = createContext()


// create provider
export const ContactProvider = ({children}) => {

    return  <ContactContext.Provider value={'Obaydulla'}>{children}</ContactContext.Provider>
}