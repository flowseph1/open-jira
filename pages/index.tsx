import { Typography } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';

const HomePage: NextPage = () => {
    return (
        <Typography variant={'h1'} color="primary">
            Hola mundo
        </Typography>
    );
};

export default HomePage;
