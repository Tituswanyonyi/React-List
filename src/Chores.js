import React from "react";
const Duties = [
    { id: 1, project: "Washing" },
    { id: 2, project: "Cooking" },
    { id: 3, project: "Watching" }
];
const Funds = [
    { id: 1, source: "Farming" },
    { id: 2, source: "Employment" }
]

function Chores() {
    return (
        <>
            <h1>The Order of my Important Tasks each day</h1>
            <ul>
                {Duties.map((activity) => (<li key={activity.id}>{activity.project}</li>))}
                <h2>Sources of Funding</h2>
                {Funds.map((pass) => (<li key={pass.id}>{pass.source}</li>))}
            </ul>

        </>

    );
}


export default Chores;