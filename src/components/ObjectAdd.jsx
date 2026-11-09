import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { addObject } from "../store/actions/ObjectAction";

function ObjectAdd() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", year: "", price: "", cpu: "" });
    const [errMsg, setErrMsg] = useState("");

    const processChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const processSubmit = async (e) => {
        e.preventDefault();
        setErrMsg("");
        const body = {
            name: form.name,
            data: {
                Year: Number(form.year),
                Price: Number(form.price),
                CPU: form.cpu,
            },
        };
        try {
            await dispatch(addObject(body));
            navigate("/");
        } catch (err) {
            setErr(err?.response?.data?.error || "Could not add the object");
        }
    };

    return (
        <div className="col-md-6">
            <h5>Add Object</h5>
            <form onSubmit={(e)=>processSubmit(e)}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" value={form.name}
                        onChange={(e)=>processChange(e)} required="required" />
                </div>
                <div className="mb-3">
                    <label>Year</label>
                    <input type="number" name="year" className="form-control" value={form.year}
                        onChange={(e)=>processChange(e)} required="required" />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input type="number" step="0.01" name="price" className="form-control" value={form.price}
                        onChange={(e)=>processChange(e)} required="required" />
                </div>
                <div className="mb-3">
                    <label>CPU</label>
                    <input type="text" name="cpu" className="form-control" value={form.cpu}
                        onChange={(e)=>processChange(e)} required="required" />
                </div>
                {errMsg && <p className="text-danger">{err}</p>}
                <button type="submit" className="btn btn-primary me-2">Add</button>
                <Link to="/" className="btn btn-secondary">Cancel</Link>
            </form>
        </div>
    );
}

export default ObjectAdd;