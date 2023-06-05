import { useContext, createContext } from "react";

const AuthConetext = createContext()

export function AuthProvider({children, value}) {
    return <AuthConetext.Provider value={value}>
        {children}
    </AuthConetext.Provider>
}

export function useAuthValue(){
    return useContext(AuthConetext)
}