
import React from 'react';
import { Box, Grid, Container, Typography, Stack, Divider, Button } from '@mui/material';
import Page from '../../components/Page';
import { UpcomingTest,TestMissed,TestSubmiited,AppNewsUpdate,TodayTest, UpcomingTestTable, SubmittedTestTable  } from '../../components/student/main';
import Navbar from '../../components/student/navbar/Navbar';
import faker from 'faker';
import { useHistory } from 'react-router-dom';
// import Scrollbar from '../../components/Scrollbar'
import studentMain from '../../_mocks_/studentMain';


export default function DashboardApp() {
    const history = useHistory();
    const [todayTest] =  React.useState(studentMain.todayTest);
    const [upcomingTest] =  React.useState(studentMain.upcomingTest);
    const [submittedTest] =  React.useState();
    const arr = Array.from(Array(5).keys());

    return (
    <Page title="Examify | Home">
        <Navbar isHome={false}/>
        <Container maxWidth="xl">
            <Box sx={{ pt: 15, pb: 5}}>
                <Typography variant="h4">Welcome to Examify</Typography>
            </Box>

            <Grid container spacing={3}>

                <Grid item xs={12} sm={6} md={3}>
                    <TodayTest total={2}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <UpcomingTest total={10}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TestSubmiited total={2}/>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <TestMissed total={1}/>
                </Grid>


                <Grid item xs={12} md={12} lg={12}>
                    <Box sx={{ pt: 5, pb: 2}}>
                        <Typography variant="h4">Today Test</Typography>
                    </Box>
                    {todayTest.map((data, index) => (
                        <AppNewsUpdate
                        data = {data}
                        index = {index}
                        />
                    ))}
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                        <UpcomingTestTable data={upcomingTest} isMain={true}/>
                        {upcomingTest && upcomingTest?.length > 0 &&
                            <Box sx={{mt:5,display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                                <Button variant="contained" size="large" onClick = {() => history.push('/StudentUpcomingTest')}>Show More</Button>
                            </Box>
                        }
                        
                </Grid>


                <Grid item xs={12} md={12} lg={12}>
                    <SubmittedTestTable isMain={true}/>
                    <Box sx={{mt:5,display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Button sx={{mb: 10}} variant="contained" size="large"  onClick = {() => history.push('/StudentSubmittedTest')}>Show More</Button>
                    </Box>
                </Grid>
        </Grid>
        </Container>
    </Page>
  );
}
