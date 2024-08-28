
import Dashboard from "../components/Dashboard";
import Main from "../components/Main";
import Loading from "../components/Loading";


export const metadata = {
    title: "Mood · Dashboard",
};

export default function page(){
    
    return(
        <Main>
            <Dashboard />
        </Main>
    )
}