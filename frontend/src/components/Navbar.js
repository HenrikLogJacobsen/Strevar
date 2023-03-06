import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
                    <CustomLink to="/my-programs">Treningsprogram</CustomLink>
                    <CustomLink to="/my-sessions">Treningsøkter</CustomLink>
                    <CustomLink to="/my-exercises">Øvelser</CustomLink>
                </ul>
                
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