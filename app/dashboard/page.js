import { useAuth } from "@/context/AuthContext";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Main from "../components/Main";


export const metadata = {
    title: "Mood · Dashboard",
};

export default function page(){
    const {currentUser, loading} = useAuth()

    let children = (
        <Login />
    )

    if(loading){
        
    }

    if (currentUser){
        children = (
            <Dashboard />
        )
    }
    return(
        <Main>
            {children}
        </Main>
    )
}