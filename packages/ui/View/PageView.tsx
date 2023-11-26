import { ReactNode } from "react";
import "./pageView.css"

interface propsview{
    children:ReactNode
}

export const PageView = ({children}: propsview) => {

    return (
        <div className="pagecomp">
            {children}
        </div>
    )
  };
  