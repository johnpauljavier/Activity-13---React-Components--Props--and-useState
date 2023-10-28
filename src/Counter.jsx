import { useState } from "react";

import CountDisplay from "./CounterDisplay";

function Counter({count, setCount}) {



    return (
        <main className="card text-center m-5 shadow pb-4 bg-secondary">
            <div className="card-body">
                <h4 className="card-title fw-semibold text-white">Counter</h4>
                <CountDisplay count={count} />
            </div>
            <div>
                <button className="btn btn-dark ps-5 pe-5 me-2 rounded-3" onClick={() => {
                    setCount(count + 1);
                }}
                 >+</button>

                <button className="btn btn-dark ps-5 pe-5 rounded-3" onClick={() => {
                    setCount(count - 1);
                }}
                disabled = {count === 0 ? true :false}
                >-</button>
            </div>
        </main>
        
    )
}
export default Counter