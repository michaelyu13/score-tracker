import React, { useEffect } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material/';

type AddScoreFormProps = {
    scores: number[];
    setScores: React.Dispatch<React.SetStateAction<number[]>>;
};

const AddScoreForm = ({ scores, setScores }: AddScoreFormProps) => {
    // Regex pattern to check if the input only contains numbers
    const regexPattern = /^[0-9]+$/;

    const [newScore, setNewScore] = React.useState<string>('');
    const [helperText, setHelperText] = React.useState<string>('');
    const [isAddButtonDisabled, setIsAddButtonDisabled] = React.useState<boolean>(false);
    // const [dateCleared, setDateCleared] = React.useState<boolean>(false);
    const [formHasErrors, setFormHasErrors] = React.useState<boolean>(false);

    useEffect(() => {
        doFormValidation(newScore);
    }, [newScore]);

    // useEffect(() => {
    //     if (dateCleared) {
    //         const timeout = setTimeout(() => {
    //             setDateCleared(false);
    //         }, 1500);

    //         return () => clearTimeout(timeout);
    //     }
    //     return () => {};
    // }, [dateCleared]);

    const doFormValidation = (newScore: string) => {
        if (!newScore.length) {
            setIsAddButtonDisabled(true);
            setFormHasErrors(false);
            setHelperText('');
            return;
        }

        if (newScore && newScore.charAt(0) === '0') {
            setIsAddButtonDisabled(true);
            setFormHasErrors(true);
            setHelperText('Number cannot begin with 0.');
            return;
        }

        if (newScore && !regexPattern.test(newScore)) {
            setIsAddButtonDisabled(true);
            setFormHasErrors(true);
            setHelperText('Must be a number.');
            return;
        }

        setIsAddButtonDisabled(false);
        setFormHasErrors(false);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setNewScore(e.target.value);
    };

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(111);

        setScores([...scores, parseInt(newScore)]);

        setNewScore('');
    };

    return (
        <>
            <Typography variant="h3" component="h2" align="center" mb={4}>
                Add Score
            </Typography>

            <Box
                component="form"
                onSubmit={handleOnSubmit}
                display="flex"
                justifyContent="center"
                alignItems="baseline"
                gap={4}
                mb={8}
            >
                {/* <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box
                            component="div"
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                position: 'relative',
                            }}
                        >
                            <DatePicker
                                label="Period"
                                views={['month', 'year']}
                                sx={{ width: 260 }}
                                slotProps={{
                                    field: { clearable: true, onClear: () => setDateCleared(true) },
                                }}
                            />
                        </Box>
                    </LocalizationProvider>
                </div> */}

                <TextField
                    required
                    id="newScore"
                    label="New Score"
                    value={newScore}
                    error={formHasErrors}
                    helperText={helperText}
                    onChange={handleOnChange}
                    variant="outlined"
                />

                <Button type="submit" variant="contained" size="large" disabled={isAddButtonDisabled}>
                    Add Score
                </Button>
            </Box>
        </>
    );
};

export default AddScoreForm;
