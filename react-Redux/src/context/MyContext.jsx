const { createContext, useState } from "react";

const MyStore = createContext()


const ContextProvider = ({ children }) => {
    const [centralValue, setCentralValue] = useState("me context se hu")
    const [cartItems, setCartItems] = useState([])
    return (
        <Mystore.Provider value={{ centralValue, setCentralValue, cartItems, setCartItems }}>{children}</Mystore.Provider>
    )
}
