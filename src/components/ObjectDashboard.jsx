import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router";
import { fetchObjects } from "../store/actions/ObjectAction";

function ObjectDashboard() {
    const dispatch = useDispatch();
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        const load = async () => {
            try {
                await dispatch(fetchObjects());
            } catch (err) {
                setErrMsg("Could not load objects");
            }
        };
        load();
    }, []);

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Objects Dashboard</h3>
                <div>
                    <Link to="/" className="btn btn-outline-primary me-2">All Objects</Link>
                    <Link to="/add" className="btn btn-primary">Add Object</Link>
                </div>
            </div>
            {errMsg && <p className="text-danger">{err}</p>}
            <Outlet />
        </div>
    );
}

export default ObjectDashboard;