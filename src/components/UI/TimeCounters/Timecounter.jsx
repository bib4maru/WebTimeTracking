import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { ComputeTime } from '../../../utils/ComputeTime';
const Timecounter = (props) => {
    const [time, setTime] = useState("");
    useEffect(() => {
        setTime(ComputeTime(props.project.HistoryOfWorks));
    }, [props.project])
    return (
        <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "60%",
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
                    <Typography color="green"
                        sx={{
                            fontFamily: "'Exo 2', sans-serif;",
                        }}
                    >{time.usefull}</Typography>
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
                    <Typography color="red"
                        sx={{
                            fontFamily: "'Exo 2', sans-serif;",
                        }}
                    >{time.useless}</Typography>
                </Paper>
            </Box>
    );
};

export default Timecounter;