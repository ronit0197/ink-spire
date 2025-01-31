import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    return (
        <Box className="header" sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="h3" className="header-text">
                Welcome to Blogify
            </Typography>
            <Typography variant="h6" className="header-inner-text">
                Write your inspiring stories
            </Typography>
            <Button variant="contained" color="success" className="create-blog-button">
                Create Blog
            </Button>
        </Box>
    )
}

export default Header