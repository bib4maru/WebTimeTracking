import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
const Timecounter = () => {
    return (
        <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "45%",
                    marginBottom: 5,
                    alignSelf:"center"
                }}
            >
                <Paper elevation={3}
                    sx={{
                        display: "flex",
                        alignItems:"center",
                        flexDirection: "column",
                        border: "2px solid green"
                    }}
                >
                    <Typography color="green"
                        sx={{
                            fontFamily: "'Exo 2', sans-serif;",
                        }}
                    >Полезное время</Typography>
                    <Typography variant='h2' color="green"
                        sx={{
                            fontFamily: "'Exo 2', sans-serif;",
                        }}
                    >25</Typography>
                </Paper>
                <Paper elevation={3}
                    sx={{
                        display: "flex",
                        alignItems:"center",
                        flexDirection: "column",
                        border: "2px solid red"
                    }}
                >
                    <Typography color="red"
                        sx={{
                            fontFamily: "'Exo 2', sans-serif;",
                        }}
                    >Бесполезное время</Typography>
                    <Typography variant='h2' color="red"
                        sx={{
                            fontFamily: "'Exo 2', sans-serif;",
                        }}
                    >5</Typography>
                </Paper>
            </Box>
    );
};

export default Timecounter;