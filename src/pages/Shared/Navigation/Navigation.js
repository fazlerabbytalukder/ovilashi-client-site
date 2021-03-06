import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/logo.png'

const buttonDesign = {
    backgroundColor: '#8A513D',
    padding: '0 10px',
    borderRadius: '3px'
}
const buttonDesign2 = {
    backgroundColor: '#8A513D',
    padding: '5px 10px',
    borderRadius: '3px'
}
const buttonDesign3 = {
    border: '1px solid #8A513D',
    padding: '5px 10px',
    borderRadius: '3px'
}
const buttonDesign4 = {
    color: '#8A513D',
    textDecoration: 'none'
}

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        // <Box sx={{ flexGrow: 1 }}>
        //     <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
        //         <Toolbar>
        //             <img style={{ width: '100px' }} src={logo} alt="" />
        //             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        //             </Typography>
        //             <Link style={{...buttonDesign4}} to='/home'><Button color="inherit">Home</Button></Link>
        //             <Link style={{...buttonDesign4}} to='/allProducts'><Button color="inherit">Products</Button></Link>
        //             <Link style={{...buttonDesign4}} to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
        //             {
        //                 user?.email ?
        //                     <>
        //                         {/* <Button style={{ color: '#8A513D', marginRight: '7px', ...buttonDesign3 }}>{user?.displayName}</Button> */}
        //                         <Button style={{...buttonDesign2}} onClick={logout} color="inherit">Logout</Button>
        //                     </>
        //                     :
        //                     <NavLink style={{ textDecoration: "none", color: 'white',...buttonDesign }} to='/login'><Button color="inherit">Login</Button></NavLink>
        //             }
        //         </Toolbar>
        //     </AppBar>
        // </Box>
        <>
            <nav className="navbar container navbar-expand-lg navbar-light bg-transperent">
                <div className="container-fluid">
                    <img style={{ width: '100px' }} src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ ...buttonDesign4 }} to='/home'><Button color="inherit">Home</Button></Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{ ...buttonDesign4 }} to='/allProducts'><Button color="inherit">Products</Button></Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link style={{ ...buttonDesign4 }} to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
                            </li> */}
                            {
                                user?.email ? <>
                                    <Link style={{ ...buttonDesign4 }} to='/dashboard'><Button color="inherit">Dashboard</Button></Link>
                                    <Button style={{ color: '#8A513D', marginRight: '7px', ...buttonDesign3 }}>{user?.displayName}</Button>
                                    <Button style={{ ...buttonDesign2 }} onClick={logout} color="inherit">Logout</Button>
                                </>
                                    :
                                    <NavLink style={{ textDecoration: "none", color: 'white', ...buttonDesign }} to='/login'><Button color="inherit">Login</Button></NavLink>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;