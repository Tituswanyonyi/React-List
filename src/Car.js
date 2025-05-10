import React from "react";
const carBrands = [
    { id: 1, name: 'Toyota' },
    { id: 2, name: 'Ford' },
    { id: 3, name: 'BMW' }
];

function Car() {
    return (
        <>
            <h1>My car collection lists include:</h1>
            <ul>
                {carBrands.map((brand) => (
                    <li key={brand.id}>{brand.name}</li>
                ))}
            </ul>
        </>
    );
}
export default Car;