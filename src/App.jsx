import { Route, Routes } from "react-router";
import ObjectDashboard from "./components/ObjectDashboard";
import ObjectList from "./components/ObjectList";
import ObjectAdd from "./components/ObjectAdd";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ObjectDashboard />}>
                <Route path="" element={<ObjectList />} />
                <Route path="add" element={<ObjectAdd />} />
            </Route>
        </Routes>
    );
}

export default App;