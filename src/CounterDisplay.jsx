

function CountDisplay({count}) {
    return (
        
        <h5 style={{color: count < 6 ? "red": "blue"}}>
            {count}
        </h5>
        
    )
}
export default CountDisplay;