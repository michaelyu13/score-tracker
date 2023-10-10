import { AppContextProvider } from './context/AppContext';

import AddDataUsageForm from './components/AddDataUsageForm';

import { Box, Container, CssBaseline, Typography } from '@mui/material/';

const App: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box component="header" my={4}>
                    <Typography variant="h2" component="h1" align="center">
                        Mobile Data Usage Tracker
                    </Typography>
                </Box>

                <Box component="main">
                    <AppContextProvider>
                        <AddDataUsageForm />
                    </AppContextProvider>
                </Box>
            </Container>
        </>
    );
};

export default App;
