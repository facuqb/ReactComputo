import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
    const navigate = useNavigate();
    const onLogOut= () => {
        navigate("login",{
            replace:true
        })}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Legal Buddy
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
                        to="/computo"
                    >
                        Computo-App
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
                        to="/pena"
                    >
                        Pena-App
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-25 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span
                        className='nav-item nav-link text-info'>
                        Usuario
                    </span>
                    <button
                        className='nav-item nav-link btn'
                        onClick={onLogOut}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}