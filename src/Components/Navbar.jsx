import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <Typography variant="h6" className="title">
                    <BubbleChartIcon />Blogify
                </Typography>
                <Button component={Link} to="/login" color="inherit" className="login-button">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
