import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';

import { Box, Button, TextField, Typography } from '@mui/material/';

const AddDataUsageForm = () => {
    const appContext = useAppContext();

    // Regex pattern to check if the input only contains numbers
    const regexPattern = /^[0-9]+$/;

    useEffect(() => {
        if (appContext.dataUsed === '') {
            appContext.setIsAddButtonDisabled(true);
            appContext.setFormHasErrors(false);
            appContext.setHelperText('');
        } else {
            if (appContext.dataUsed.charAt(0) === '0') {
                appContext.setIsAddButtonDisabled(true);
                appContext.setFormHasErrors(true);
                appContext.setHelperText('Number cannot begin with 0');
            } else {
                if (regexPattern.test(appContext.dataUsed)) {
                    appContext.setIsAddButtonDisabled(false);
                    appContext.setFormHasErrors(false);
                } else {
                    appContext.setIsAddButtonDisabled(true);
                    appContext.setFormHasErrors(true);
                    appContext.setHelperText('Must be a number');
                }
            }
        }
    }, [appContext.dataUsed]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        return appContext.setDataUsed(e.target.value);
    };

    return (
        <>
            <Typography variant="h3" component="h2" align="center" mb={4}>
                Add Data Usage
            </Typography>

            <Box component="section" display="flex" justifyContent="center" alignItems="flex-start" gap={4}>
                <TextField
                    required
                    id="dataUsed"
                    label="Data Used (MB)"
                    value={appContext.dataUsed}
                    error={appContext.formHasErrors}
                    helperText={appContext.helperText}
                    onChange={handleOnChange}
                    size="small"
                    variant="outlined"
                />

                <Button variant="contained" disabled={appContext.isAddButtonDisabled}>
                    Add Data Usage
                </Button>
            </Box>
        </>
    );
};

export default AddDataUsageForm;
