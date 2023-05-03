import "./navbar.css"
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navbar_Container">
                <span className="logo">HondaBooking</span>
                <div className="navItems">
                  <button className="navabar_Button">Register</button>
                  <button className="navabar_Button">Login</button>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;