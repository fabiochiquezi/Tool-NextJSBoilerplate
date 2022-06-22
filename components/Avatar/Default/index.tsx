import { Avatar, Typography } from '@mui/material'
import React from 'react'

const AvatarDefault: React.FC = () => {
    return (
        <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
            <Typography component="h1" variant="h5" className="mb-4">
                Sign in
            </Typography>
        </>
    )
}

export default AvatarDefault
