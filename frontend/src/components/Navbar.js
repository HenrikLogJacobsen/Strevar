import { Link, useMatch, useResolvedPath } from "react-router-dom"
import UserMenuElement from "./UserMenuElement"


const Navbar = () => {

    return (
        <header>
            <div className="nav">
    
                <Link to='/'>
                    <h1>Strevar</h1>
                </Link>
                
                <div className="menu">
                  <CustomLink to="/">Hjem</CustomLink>
                  <CustomLink to="/">Grupper</CustomLink>
                  {/* <CustomLink to="/my-programs">Treningsprogram</CustomLink> */}
                  <CustomLink to="/my-sessions">Økter</CustomLink>
                  <CustomLink to="/my-exercises">Øvelser</CustomLink>
                
                  <UserMenuElement/>
                  
                  <button className="logoutBtn">Logg ut</button>
                </div>
            </div>
        </header>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Navbar