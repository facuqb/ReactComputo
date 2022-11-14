import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const {user,logout} = useContext(AuthContext)

    const navigate = useNavigate();
    const onLogOut= () => {
        logout()
        navigate("login",{
            replace:true
        })}

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2 sticky-md-top">
            <div className="container-fluid">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    Legal Buddy
                </Link>

                <button className="custom-toggler navbar-toggler" type="button"  aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}>
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`${(isNavCollapsed ? 'collapse' : '')} navbar-collapse`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink 
                                className={({isActive}) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
                                aria-current="page"
                                to="/computo"
                            >
                                Computo-App
                            </NavLink>
                         </li>
                         <li className='nav-item'>
                            <NavLink 
                                className={({isActive}) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
                                to="/pena"
                            >
                                Pena-App
                            </NavLink>
                         </li>

                    </ul>

                    <div className={` ${(isNavCollapsed ? 'collapse navbar-collapse' : '')} order-3 dual-collapse2 d-flex justify-content-end align-items-center`}>
                        <ul className="navbar-nav ml-auto">
                            <span
                                className='nav-item nav-link text-info'>
                                {user?.name}
                            </span>
                            <button
                                className='nav-item nav-link btn text-white fw-bold'
                                onClick={onLogOut}>
                                Logout
                            </button>
                        </ul>
                    </div>


                </div>


            </div>
            


            
        </nav>
    )
}