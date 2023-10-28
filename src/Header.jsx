function Header({title, count}) {
    return (
        <>
            <header className="container-fluid text-center bg-light mt-3">

                <h1 style={
                    {
                        color: (count > 5) ? 'red' : 'black'
                    }
                }>{title} </h1>
                
            </header>
        </>
    );
}
export default Header;