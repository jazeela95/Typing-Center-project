import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";
import Logo from "../images/logo.gif";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) =>  {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = () => {
    setAnchorElNav(null); // Close the mobile menu when a menu item is clicked
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='hh'>
        <Toolbar disableGutters>
          <Typography
            className='imgheader'
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:"200px",
              zIndex:100
            }}
          >
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="" className='logoimage' />
            </Link>
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
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem style={{ width: 180 }} onClick={handleMenuItemClick}>
                <Typography>
                  <ul className='navmobileview' style={{ display: 'flex', gap: '2rem', listStyleType: "none" }}>
                    <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
                    <li><Link to="/about" onClick={handleMenuItemClick}>About</Link></li>
                    <li>
                      <NavDropdown title="Services" id="basic-nav-dropdown" style={{ cursor: 'pointer' }}>
                        <NavDropdown.Item><Link to="/Legaltranslation" onClick={handleMenuItemClick}>Legal Translation</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Tax" onClick={handleMenuItemClick}>Tax consulting</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/Typing" onClick={handleMenuItemClick}>All Typing works</Link></NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    <li><Link to="/Contact" onClick={handleMenuItemClick}>Contact</Link></li>
                  </ul>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft:"160px"
            }}
          >
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="" className='logoimage' />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ul className='webviewnav' style={{ listStyleType: "none" }}>
              <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
              <li><Link to="/about" onClick={handleMenuItemClick}>About</Link></li>
              <li>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/Legaltranslation" onClick={handleMenuItemClick}>Legal Translation</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Tax" onClick={handleMenuItemClick}>Tax consulting</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Typing" onClick={handleMenuItemClick}>All Typing works</Link></NavDropdown.Item>
                </NavDropdown>
              </li>
              <li><Link to="/Contact" onClick={handleMenuItemClick}>Contact</Link></li>
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
