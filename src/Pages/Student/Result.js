
import React from 'react';
import { Box, Grid, Container, Typography, Stack, Button } from '@mui/material';
import Page from '../../components/Page';
import { ResultMutipleCheck, ResultSingleCheck } from '../../components/student/main';
import resultdata from '../../_mocks_/testSubmitted';
import Navbar from '../../components/student/navbar/Navbar';

export default function Result() {
    const [result, setresult] = React.useState(resultdata);

    return (
    <Page title={`Test | ${result?.title}`}>
        <Navbar />
        <Container maxWidth="xl" sx={{pb: 15}}>
            <Box sx={{ pt: 15, pb: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Typography className="noselect" variant="h4">{result?.title}</Typography>
                    <Typography className="noselect" variant="h4">Marks: {result?.marks}/{result?.totalMarks}</Typography>
            </Box>
            
            <Grid container spacing={3} sx={{pl:5, pr:5}}>
                <Grid item xs={12} md={12} lg={12}>

                    {result?.question.map((q, i) => (
                        <Box key={i}>
                            {!q.mcqType ? 
                            <ResultSingleCheck
                                questionindex={i}
                                title={q.title}
                                marks={q.marks}
                                answered={q.answered}
                                mcqQuestions= {q.mcqQuestions}
                            /> : 
                            
                            <ResultMutipleCheck
                                questionindex={i}
                                title={q.title}
                                marks={q.marks}
                                answered={q.answered}
                                mcqQuestions= {q.mcqQuestions}
                            />}
                        </Box>
                    ))}

                </Grid>
        </Grid>
        </Container>
    </Page>
    );
}
