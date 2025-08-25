import { createContext, useContext, useState } from "react";
const taskContext=createContext();

function useNewsContext(){
    const value=useContext(taskContext);
    return value;
}

function TaskContext({children}){
    const [isHomePage,setIsHomePage]=useState(true);
    const [articles,setArticles]=useState([]);
    const [menuOpend,setMenuOpend]=useState(false);
    return(
        <taskContext.Provider 
        value={{isHomePage,setIsHomePage,articles,setArticles,menuOpend,setMenuOpend
        }}>
            {children}
        </taskContext.Provider>
    )
}

export {useNewsContext,TaskContext}