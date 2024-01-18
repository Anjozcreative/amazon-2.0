'use client'
import { SessionProvider as Provider } from "next-auth/react";

export async function SessionProvider({ children }) {

    return (
        <Provider>
            {children}
        </Provider>
    )
}