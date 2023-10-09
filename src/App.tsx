import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {
    return (
        <>
            <CssBaseline />
            <Container sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Box component="header" my={4}>
                    <Typography variant="h2" component="h1" align="center">
                        Header
                    </Typography>
                </Box>

                <Box component="main" flexGrow="1">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit tempore fugit eligendi odit
                        cumque omnis consectetur quam? Veritatis iste reprehenderit, eius cum dignissimos neque modi
                        voluptates veniam quis itaque dicta. Minima delectus, praesentium illo quo libero eius, commodi
                        dignissimos quos laborum tempore iure quisquam. Voluptates, nihil minima. Laborum soluta
                        adipisci nihil unde reiciendis non. A officiis autem quis dicta amet! Totam, maiores facere?
                        Atque aliquid, soluta laudantium facere dolor repudiandae! Rem exercitationem esse est,
                        reiciendis earum, totam sed odio nisi recusandae maxime ipsam itaque autem! Repellendus commodi
                        ullam maiores magnam.
                    </p>
                </Box>

                <Box component="footer" mx={4} mb={4}>
                    <Typography align="center">Footer</Typography>
                </Box>
            </Container>
        </>
    );
}

export default App;
