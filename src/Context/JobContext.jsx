import { useContext, createContext } from "react";
const JobContext = createContext();

export const JobProvider = ({children})=>{
    
    return <JobContext.Provider>{children}</JobContext.Provider>
}

export const JobData =()=> useContext(JobContext);