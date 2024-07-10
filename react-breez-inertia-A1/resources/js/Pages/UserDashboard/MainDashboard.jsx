import { Head } from "@inertiajs/react";
import RoleDashboard from "./RoleDashBoard";
import { LineChart, YAxis, XAxis, ResponsiveContainer, CartesianGrid, Line, Tooltip, Legend } from "recharts";
import { useEffect, useState } from "react";
export default function () {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, []);
    const fetchData = async () => {
        const response = await fetch('/yourrole/data');
        const result = await response.json();
        setData(result);
    }
    return (
        <>
            <RoleDashboard>
                <Head title="Dashboard" />
                <div className="container p-5">
                    <h1 className="display-2">Chart</h1>
                    <ResponsiveContainer height={500} width="100%" className="mt-5">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray={'3 3'} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke='#8884d8' activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </RoleDashboard>
        </>
    )
}