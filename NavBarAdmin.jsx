import '../styles/NavBar.css';

const NavBarAdmin = () => {
   return (
      <nav className = "navBarAdmin">
         <ul>
            <li>
               <button className="navBackButton" onClick = {() => window.history.back()}>
                  <img src = {require('../assets/arrow-left.svg')} alt = "Back" className = "navBackButtonImage" />
                  Back
               </button>
            </li>
            <li>
               <h3 className="pulseTrackLogo">PulseTrack</h3>
            </li>
            <li>
               <img src = {require('../assets/user.png')} alt = "Admin" className = "navAdminImage" />
            </li>
         </ul>
      </nav>
   )
}

export default NavBarAdmin;