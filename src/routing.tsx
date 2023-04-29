import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Help, Home, Profile, Settings, TaskManager } from "./pages";


export const Routing = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/task-manager" element={<TaskManager />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route path="/help" element={<Help />}/> 
                    <Route path="/profile" element={<Profile />}/> 
                </Routes>
            </Router>
        </div>
    );
}