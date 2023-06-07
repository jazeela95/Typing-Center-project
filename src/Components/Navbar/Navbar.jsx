import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Android';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"
import Logo from "../images/logo.gif";
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';
// import InputLabel from '@mui/material/InputLabel';

// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import zIndex from '@mui/material/styles/zIndex';


// const pages = ['Home', 'About', 'Contact'];
// const settings = ['Legal Translation', 'Tax Consulting', 'All typing Works'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) =>  {
    console.log(event.currentTarget);
    setAnchorElNav(event.currentTarget);
  };
  // // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
             <a href="/" className="navbar-brand">
      <img src={Logo} alt="" className='logoimage' />
    </a>
          </Typography>
{/* mobile view 3line */}
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
              // keepMounted
              // transformOrigin={{
              //   vertical: 'top',
              //   horizontal: 'left',
              // }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => ( */}
                <MenuItem style={{width:180}}>
                  <Typography >    
                  <ul className='navmobileview' style={{display:'flex',gap:'2rem',listStyleType:"none"}}>
                  <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li >
            <NavDropdown title="Services" id="basic-nav-dropdown" style={{cursor:'pointer'}} >
          <NavDropdown.Item href="/Legaltranslation">Legal Translation</NavDropdown.Item>
          <NavDropdown.Item href="/Tax">Tax consulting</NavDropdown.Item>
          <NavDropdown.Item href="/Typing">All Typing works</NavDropdown.Item>  
        </NavDropdown>
              
              
              
            </li>
            <li><a href="/Contact">Contact</a></li>
                  </ul>
                  </Typography>
                </MenuItem>
              {/* ))} */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
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
             <a href="/" className="navbar-brand">
      <img src={Logo} alt="" className='logoimage' />
    </a>
          </Typography>
          {/* //web */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           <ul  className='webviewnav' style={{listStyleType:"none",}}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li>
            <NavDropdown title="Services" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Legaltranslation">Legal Translation</NavDropdown.Item>
          <NavDropdown.Item href="/Tax">Tax consulting</NavDropdown.Item>
          <NavDropdown.Item href="/Typing">All Typing works</NavDropdown.Item>
        </NavDropdown>
              
              
              
            </li>
            <li><a href="/Contact">Contact</a></li>
            
           </ul>
              <Button
                // key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {/* {page} */}
              </Button>
           
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
