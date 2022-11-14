import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import BalanceIcon from '@mui/icons-material/Balance';

const pages = [{name:'Computo-App', path: 'computo'}, {name:'Pena-App', path: 'pena'}];
const settings = ['Logout'];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user,logout} = useContext(AuthContext)
  const navigate = useNavigate();
  const onLogOut= () => {
        logout()
        navigate("login",{
            replace:true
        })}
  const onClickLink = (path) =>{
    navigate(path);
    setAnchorElNav(null);
  } 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <BalanceIcon sx={{display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/computo"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LegalBuddy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({name,path}) => (
                <MenuItem key={name} onClick={() => onClickLink(path)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/computo"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Legal Buddy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({name,path}) => (
              <Button
                key={name}
                onClick={() => onClickLink(path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={user?.name}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" sx={{bgcolor: 'purple'}}>
                    {user?.name.split(' ').map(palabra => palabra[0])}                    
                    </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={onLogOut}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


//     const [isNavCollapsed, setIsNavCollapsed] = useState(true);
//     const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
//     const {user,logout} = useContext(AuthContext)

//     const navigate = useNavigate();
//     const onLogOut= () => {
//         logout()
//         navigate("login",{
//             replace:true
//         })}

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2 sticky-md-top">
//             <div className="container-fluid">
//                 <Link 
//                     className="navbar-brand" 
//                     to="/"
//                 >
//                     Legal Buddy
//                 </Link>

//                 <button className="custom-toggler navbar-toggler" type="button"  aria-expanded={!isNavCollapsed ? true : false} onClick={handleNavCollapse}>
//                 <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className={`${(isNavCollapsed ? 'collapse' : '')} navbar-collapse`}>
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink 
//                                 className={({isActive}) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
//                                 aria-current="page"
//                                 to="/computo"
//                             >
//                                 Computo-App
//                             </NavLink>
//                          </li>
//                          <li className='nav-item'>
//                             <NavLink 
//                                 className={({isActive}) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
//                                 to="/pena"
//                             >
//                                 Pena-App
//                             </NavLink>
//                          </li>

//                     </ul>

//                     <div className={` ${(isNavCollapsed ? 'collapse navbar-collapse' : '')} order-3 dual-collapse2 d-flex justify-content-end align-items-center`}>
//                         <ul className="navbar-nav ml-auto">
//                             <span
//                                 className='nav-item nav-link text-info'>
//                                 {user?.name}
//                             </span>
//                             <button
//                                 className='nav-item nav-link btn text-white fw-bold'
//                                 onClick={onLogOut}>
//                                 Logout
//                             </button>
//                         </ul>
//                     </div>


//                 </div>


//             </div>
            


            
//         </nav>
//     )
// }