import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    const [allMessages,setAllMessages] = useState([]);

    const values = {
        allMessages,
        setAllMessages,
    };

    return <ChatContext.Provider value={values} > {children} </ChatContext.Provider> 
};


export const useChat = () => useContext(ChatContext);