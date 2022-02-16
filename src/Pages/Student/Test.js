
import React from 'react';
import { Box, Grid, Container, Typography, Stack, Button, Divider } from '@mui/material';
import Page from '../../components/Page';
import { MutipleCheck, SingleCheck } from '../../components/student/main';
import newdata from '../../_mocks_/questiondata';
import { useHistory } from 'react-router-dom';

export default function DashboardApp() {
    const history = useHistory();
    const [data, setdata] = React.useState(newdata)
    const [timeRemaining, settimeRemaining] = React.useState(240);

    const second = () => (new Date()).getUTCSeconds() % timeRemaining;
    const [time, setTime] = React.useState(second);



    // React.useEffect(() => {
    //     const timer = setInterval(() =>{
    //         const nxttime = second();
    //         setTime((prevTime) => {
    //             if (prevTime > nxttime) {
    //                 console.log('navigate');
    //             }
    //             return nxttime;
    //         });
    //     }, 1000)
        
    //     return (() => {
    //         clearInterval(timer);
    //     })
    // }, [])

    const SubmitTest = () => {
        console.log('Test Submitted');
        history.push('/');
    }

return (
    <Page title={`Test | ${data?.title}`}>

        <Container maxWidth="xl" sx={{pb: 15}}>
            <Box sx={{ pt: 15, pb: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Box>
                    <Typography className="noselect" variant="h4">{data?.title}</Typography>
                    <Typography className="noselect" variant="h4">Total Marks: {data?.totalMarks}</Typography>
                </Box>
                <Typography className="noselect" variant="h4">Time Remaining : {timeRemaining - time}</Typography>
            </Box>

            <Divider />
            
            <Grid container spacing={3} sx={{pl:5, pr:5}}>
                <Grid item xs={12} md={12} lg={12}>

                    {data?.question.map((q, i) => (
                        <Box key={i}>
                            {!q.mcqType ? 
                            <SingleCheck
                                questionindex={i}
                                title={q.title}
                                marks={q.marks}
                                mcqQuestions= {q.mcqQuestions}
                                disabled={false}
                            /> : 
                            
                            <MutipleCheck
                                questionindex={i}
                                title={q.title}
                                marks={q.marks}
                                mcqQuestions= {q.mcqQuestions}
                                disabled={false}
                                disabled={false}
                            />}
                        </Box>
                    ))}

                </Grid>
        </Grid>
        
        <Box sx={{mt:10,display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Button variant="contained" size="large" onClick= {() => SubmitTest()}> Submit test </Button>
        </Box>

        </Container>
    </Page>
    );
}
