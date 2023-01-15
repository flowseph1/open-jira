import { Box } from '@mui/system';
import Head from 'next/head';
import { FC } from 'react';
import { Navbar, Sidebar } from '../ui';

interface Props {
    title?: string;
    children: JSX.Element;
}

export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
    return (
        <Box sx={{ flexFlow: 1 }}>
            <Head>
                <title>{title}</title>
            </Head>

            {/* Navbar */}
            <Navbar />
            {/* SideBar */}
            <Sidebar />
            <Box sx={{ padding: '10px' }}>{children}</Box>
        </Box>
    );
};
