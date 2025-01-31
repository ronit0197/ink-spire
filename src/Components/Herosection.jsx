import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Herosection = () => {
    const [animateImage, setAnimateImage] = useState(false)

    // Trigger the animation after the component mounts
    useEffect(() => {
        setAnimateImage(true)
    }, [])

    return (
        <Box className="hero-section">
            <Box className="hero-content">
                <Typography variant="h2" className="hero-title">
                    Unleash Your Creativity
                </Typography>
                <Typography variant="h6" className="hero-subtitle">
                    Share your stories with the world on InkSpire
                </Typography>
            </Box>
            <Box
                className={`hero-image ${animateImage ? 'animate' : ''}`}
                style={{ backgroundImage: 'url(https://akrato.com/images/properties/dev/mobileversion.png)' }}
            />
        </Box>
    )
}

export default Herosection
