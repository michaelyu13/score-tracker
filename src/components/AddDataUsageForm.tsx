import { useAppContext } from '../context/AppContext';

import { Box, Button, TextField, Typography } from '@mui/material/';

const AddDataUsageForm = () => {
    const appContext = useAppContext();

    return (
        <>
            <Typography variant="h3" component="h2" align="center" mb={4}>
                Add Data Usage
            </Typography>

            <Box component="section" display="flex" justifyContent="center" alignItems="center" gap={4}>
                <TextField required id="amount" label="Data Used (GB)" size="small" variant="outlined" />

                <Button variant="contained" disabled={appContext.addButtonDisabled}>
                    Add Usage
                </Button>
            </Box>
        </>
    );
};

export default AddDataUsageForm;
