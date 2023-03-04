import { Link, useMatch, useResolvedPath } from "react-router-dom"
import UserMenu from "./UserMenu"


const Navbar = () => {

    return (
        <header>
            <div className="nav">
    
                <Link to='/'>
                    <h1>Strevar</h1>
                </Link>
                <ul>
                    <CustomLink to="/">Hjem</CustomLink>
                    <CustomLink to="/">Grupper</CustomLink>
                    {/* <CustomLink to="/my-programs">Treningsprogram</CustomLink> */}
                </ul>
                <ul>
                    <CustomLink to="/my-sessions">Økter</CustomLink>
                    <CustomLink to="/my-exercises">Øvelser</CustomLink>
                </ul>
                <UserMenu/>
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