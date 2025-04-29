function Header() {
    return (

        <>
            <div className="fullpage">
                <nav>
                    <div className="logo">
                        <img src="/images/logo.svg" alt= "GeekFoods Logo" ></img>
                        <h1>GeekFoods</h1>
                       </div>
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Quote</a></li>
                        <li><a href="/">Restaurants</a></li>
                        <li><a href="/">Foods</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                    <button id="start-btn">Get Started</button>
                </nav>
               
            </div>
            </>
            )
    
}
export default Header;