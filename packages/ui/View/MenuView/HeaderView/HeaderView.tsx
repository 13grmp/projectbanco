import { Children } from "react";
import { Header } from "./Header/Header";

interface HeaderViewProps{
    children:React.ReactNode
}

export function HeaderView({ children }: HeaderViewProps){
    return(
        <Header>
            {children}
        </Header>    
    )
}