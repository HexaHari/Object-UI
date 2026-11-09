import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteObject } from "../store/actions/ObjectAction";

function ObjectList() {
    const dispatch = useDispatch();
    const objectList = useSelector((state) => state.objectList);
    const [page, setPage] = useState(0);
    const [errMsg, setErrMsg] = useState("");

    const size = 10;
    const lastPage =Math.ceil(objectList.length / size) - 1;
    const current = Math.min(page, lastPage);
    const shown = objectList.slice(current * size, current * size + size);

    const getYear = (data) => data?.year ?? data?.Year ?? "N/A";
    const getColor = (data) => data?.color || data?.Color || "N/A";
    const getPrice = (data) => data?.price || data?.Price || "N/A";
    const getCpu = (data) => data?.["CPU model"] || data?.CPU || "N/A";

    const processDelete = async (id) => {
        setErrMsg("");
        try {
            await dispatch(deleteObject(id));
        } catch (err) {
            setErr(err?.response?.data?.error || "Could not delete the object");
        }
    };

    return (
        <div>
            {errMsg && <p className="text-danger">{err}</p>}
            <div className="row">
                {shown.map((o) => (
                    <div className="col-md-6" key={o.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{o.name}</h5>
                                <p className="mb-1">Year: {getYear(o.data)}</p>
                                <p className="mb-1">Color: {getColor(o.data)}</p>
                                <p className="mb-1">Price: {getPrice(o.data)}</p>
                                <p className="mb-3">CPU: {getCpu(o.data)}</p>
                                <button className="btn btn-danger" onClick={() => processDelete(o.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <button className="btn btn-outline-secondary me-3" disabled={current === 0}
                    onClick={() => setPage(current - 1)}>
                    Previous
                </button>
                <span>Page {current + 1} of {lastPage + 1}</span>
                <button className="btn btn-outline-secondary ms-3" disabled={current === lastPage}
                    onClick={() => setPage(current + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ObjectList;