import { Box, Typography } from '@mui/material/';

const Header = () => {
    return (
        <Box component="header" my={4}>
            <Typography variant="h2" component="h1" align="center" color={'#303f9f'} fontWeight={400}>
                Score Tracker
            </Typography>
        </Box>
    );
};

export default Header;
