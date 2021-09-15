import React from "react";
import react from "react";

function Number() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    console.log(doubled);
    var numbers1 = [1, 2, 3, 4, 5];
    var num2 = [6, 7, 8, 9, 10]
    return (
        <div>
            {numbers1.map(a => <li>
                {a}
            </li>)}

            {num2.map((number) =>
                <li key={number.toString()}>
                    {number}
                </li>)}

        </div>
    )
}

export default Number
