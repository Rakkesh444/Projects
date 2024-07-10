import { useState } from "react"

export default function Alert({ message }) {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                {message}
                <button type="button" className="btn-close" data-mdb-dismiss="alert" onClick={() => setVisible(false)}>
                    &times;
                </button>
            </div>
        </>
    )
}