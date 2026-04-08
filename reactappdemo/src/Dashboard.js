import React, { useState, useEffect } from "react";

function Dashboard({ title = "Corporate Dashboard", financialYear = 2026 }) {

    console.log("initialization");

    const [company, setCompany] = useState("indra");
    const [year, setYear] = useState(financialYear);

    // Event handlers
    const changeCompany = () => {
        console.log("click event handler code execution");
        setCompany("Transflower Learning pvt.ltd");
    };

    const changeYear = () => {
        console.log("click event handler code execution");
        setYear(2027);
    };

    // componentDidMount
    useEffect(() => {
        console.log("component did mount");
    }, []);

    // componentDidUpdate
    useEffect(() => {
        console.log("component did update");
    }, [company, year]);

    console.log("rendering logic invocation");

    return (
        <div className="text-center">
            <h1>{title}</h1>
            <br />
            <h3>{company}</h3>
            <h3>{year}</h3>
            <hr />
            <button onClick={changeCompany}>Change Company</button>
            <hr />
            <button onClick={changeYear}>Change Financial Year</button>
        </div>
    );
}

export default Dashboard;   